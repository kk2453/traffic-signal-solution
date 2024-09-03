install.packages("ggplot2")

library(ggplot2)
library(tidyverse)

data <- read.csv("Traffic.csv")

data$Day.of.the.week <- as.factor(data$Day.of.the.week)
data$Traffic.Situation <- as.factor(data$Traffic.Situation)

data$Hour <- as.numeric(format(as.POSIXct(data$Time, format = "%I:%M:%S %p"), "%H"))

set.seed(123)
train_indices <- sample(seq_len(nrow(data)), size = 0.8 * nrow(data))
train_data <- data[train_indices, ]
test_data <- data[-train_indices, ]

library(randomForest)

model <- randomForest(Traffic.Situation ~ CarCount + BikeCount + BusCount + TruckCount + Total + Hour + Day.of.the.week,
                      data = train_data, 
                      ntree = 100)

predictions <- predict(model, test_data)
confusion_matrix <- table(test_data$Traffic.Situation, predictions)
print(confusion_matrix)

accuracy <- sum(diag(confusion_matrix)) / sum(confusion_matrix)
print(paste("Accuracy:", accuracy))

print(confusionMatrix(predictions, test_data$Traffic.Situation))

accuracy <- sum(predictions == test_data$Traffic.Situation) / nrow(test_data)
print(accuracy)

data$Time <- as.POSIXct(data$Time, format = "%I:%M:%S %p")

ggplot(data, aes(x = Time, y = Total)) +
  geom_line(color = "blue") +
  geom_point(color = "red") +
  labs(title = "Total Traffic Over Time", x = "Time", y = "Total Traffic Count") +
  scale_x_datetime(date_breaks = "2 hours", date_labels = "%I %p") +
  theme_minimal()
library(reshape2)

filtered_data <- data[data$Time >= as.POSIXct("07:00:00", format = "%H:%M:%S") & 
                        data$Time <= as.POSIXct("09:00:00", format = "%H:%M:%S"), ]
head(filtered_data)
ggplot(filtered_data, aes(x = Time, y = Total)) +
  geom_line(color = "blue") +
  geom_point(color = "red") +
  labs(title = "Total Traffic Between 7 AM and 9 AM", x = "Time", y = "Total Traffic Count") +
  scale_x_datetime(date_breaks = "15 minutes", date_labels = "%I:%M %p") +
  theme_minimal()

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
filtered_data <- data[data$Time >= as.POSIXct("07:00:00", format = "%H:%M:%S") & 
                        data$Time <= as.POSIXct("09:00:00", format = "%H:%M:%S"), ]

ggplot(filtered_data, aes(x = Time, y = Total)) +
  geom_line(color = "blue") +
  geom_point(color = "red") +
  labs(title = "Total Traffic Between 7 AM and 9 AM", x = "Time", y = "Total Traffic Count") +
  scale_x_datetime(date_breaks = "15 minutes", date_labels = "%I:%M %p") +
  theme_minimal()

