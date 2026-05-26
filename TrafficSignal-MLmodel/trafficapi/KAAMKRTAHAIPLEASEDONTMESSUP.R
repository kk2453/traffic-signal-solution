# Install and load necessary packages
install.packages("jsonlite")
install.packages("ggplot2")
install.packages("randomForest")
install.packages("reshape2")
install.packages("caret")

library(jsonlite)
library(ggplot2)
library(tidyverse)
library(randomForest)
library(reshape2)
library(caret)

# Read data
data <- read.csv("Traffic.csv")

# Data preparation
data$Day.of.the.week <- as.factor(data$Day.of.the.week)
data$Traffic.Situation <- as.factor(data$Traffic.Situation)
data$Hour <- as.numeric(format(as.POSIXct(data$Time, format = "%I:%M:%S %p"), "%H"))

# Split data
set.seed(123)
train_indices <- sample(seq_len(nrow(data)), size = 0.8 * nrow(data))
train_data <- data[train_indices, ]
test_data <- data[-train_indices, ]

# Train model
model <- randomForest(Traffic.Situation ~ CarCount + BikeCount + BusCount + TruckCount + Total + Hour + Day.of.the.week,
                      data = train_data, 
                      ntree = 100)

# Make predictions
predictions <- predict(model, test_data)

# Confusion matrix and accuracy
confusion_matrix <- table(test_data$Traffic.Situation, predictions)
conf_matrix_df <- as.data.frame(as.table(confusion_matrix))
accuracy <- sum(diag(confusion_matrix)) / sum(confusion_matrix)
conf_matrix_json <- toJSON(conf_matrix_df)
accuracy_json <- toJSON(list(accuracy = accuracy))

print(conf_matrix_json)
print(accuracy_json)

# Confusion matrix using caret
conf_matrix <- confusionMatrix(predictions, test_data$Traffic.Situation)
conf_matrix_json <- toJSON(list(confusion_matrix = as.data.frame(conf_matrix$table), accuracy = conf_matrix$overall['Accuracy']))
print(conf_matrix_json)

# Filter data
data$Time <- as.POSIXct(data$Time, format = "%I:%M:%S %p")
filtered_data <- data[data$Time >= as.POSIXct("07:00:00", format = "%H:%M:%S") & 
                        data$Time <= as.POSIXct("09:00:00", format = "%H:%M:%S"), ]

# Convert filtered data to JSON
filtered_data_json <- toJSON(filtered_data)
print(filtered_data_json)

# Convert melted data to JSON
melted_data <- melt(filtered_data, id.vars = "Time", measure.vars = c("CarCount", "BikeCount", "BusCount", "TruckCount"))
melted_data_json <- toJSON(melted_data)
print(melted_data_json)




# Assuming 'data' is already loaded and processed as in the previous code
# Convert the 'Time' column to POSIXct if not already done
data$Time <- as.POSIXct(data$Time, format = "%I:%M:%S %p")

# Create a simple line graph of Total Traffic over Time
ggplot(data, aes(x = Time, y = Total)) +
  geom_line(color = "blue") +
  geom_point(color = "red") +
  labs(title = "Total Traffic Over Time", x = "Time", y = "Total Traffic Count") +
  scale_x_datetime(date_breaks = "2 hours", date_labels = "%I %p") +
  theme_minimal()
