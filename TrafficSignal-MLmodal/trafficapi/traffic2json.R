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

data <- read.csv("Traffic.csv")

data$Day.of.the.week <- as.factor(data$Day.of.the.week)
data$Traffic.Situation <- as.factor(data$Traffic.Situation)

data$Hour <- as.numeric(format(as.POSIXct(data$Time, format = "%I:%M:%S %p"), "%H"))

set.seed(123)
train_indices <- sample(seq_len(nrow(data)), size = 0.8 * nrow(data))
train_data <- data[train_indices, ]
test_data <- data[-train_indices, ]

model <- randomForest(Traffic.Situation ~ CarCount + BikeCount + BusCount + TruckCount + Total + Hour + Day.of.the.week,
                      data = train_data, 
                      ntree = 100)

predictions <- predict(model, test_data)

confusion_matrix <- table(test_data$Traffic.Situation, predictions)
accuracy <- sum(diag(confusion_matrix)) / sum(confusion_matrix)

confusion_matrix_json <- toJSON(as.list(as.data.frame.matrix(confusion_matrix)))
accuracy_json <- toJSON(list(accuracy = accuracy))

print(confusion_matrix_json)
print(accuracy_json)

conf_matrix <- confusionMatrix(predictions, test_data$Traffic.Situation)
conf_matrix_json <- toJSON(list(confusion_matrix = conf_matrix$table, accuracy = conf_matrix$overall['Accuracy']))

print(conf_matrix_json)

data$Time <- as.POSIXct(data$Time, format = "%I:%M:%S %p")

filtered_data <- data[data$Time >= as.POSIXct("07:00:00", format = "%H:%M:%S") & 
                        data$Time <= as.POSIXct("09:00:00", format = "%H:%M:%S"), ]

filtered_data_json <- toJSON(filtered_data)
print(filtered_data_json)

ggplot(data, aes(x = Time, y = Total)) +
  geom_line(color = "blue") +
  geom_point(color = "red") +
  labs(title = "Total Traffic Over Time", x = "Time", y = "Total Traffic Count") +
  scale_x_datetime(date_breaks = "2 hours", date_labels = "%I %p") +
  theme_minimal()

melted_data <- melt(filtered_data, id.vars = "Time", measure.vars = c("CarCount", "BikeCount", "BusCount", "TruckCount"))
melted_data_json <- toJSON(melted_data)
print(melted_data_json)

ggplot(melted_data, aes(x = Time, y = value, color = variable)) +
  geom_line() +
  geom_point() +
  labs(title = "Traffic by Vehicle Type Over Time", x = "Time", y = "Vehicle Count", color = "Vehicle Type") +
  scale_x_datetime(date_breaks = "2 hours", date_labels = "%I %p") +
  theme_minimal()

ggplot(data, aes(x = Time, fill = Traffic.Situation)) +
  geom_histogram(binwidth = 3600, position = "stack") +
  labs(title = "Traffic Situation Over Time", x = "Time", y = "Count") +
  scale_x_datetime(date_breaks = "2 hours", date_labels = "%I %p") +
  theme_minimal()

