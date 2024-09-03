import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car_car": 145
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car_car": 114
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 122
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 114
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 107
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 103
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 114
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 145
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 104
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 144
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 57
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 31
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 30
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 61
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 47
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 80
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 49
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 58
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 53
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 110
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 137
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 122
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 114
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 119
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 113
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 118
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 113
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 130
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 129
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 117
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 113
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 117
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 130
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 146
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 110
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 111
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 132
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 141
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 120
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 141
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 107
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 141
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 120
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 113
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 132
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 119
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 133
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 132
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 66
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 27
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 75
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 54
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 54
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 69
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 52
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 66
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 54
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 134
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 117
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 121
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 111
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 144
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 121
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 136
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 114
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 118
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 131
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 148
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 120
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 116
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 137
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 131
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 114
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 116
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 136
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 103
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 131
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 133
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 136
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 146
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 103
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 135
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 104
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 144
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 132
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 38
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 53
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 30
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 50
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 31
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 28
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 31
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 52
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 42
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 116
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 143
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 118
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 121
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 135
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 100
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 138
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 132
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 104
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 121
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 135
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 117
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 138
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 134
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 146
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 110
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 110
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 145
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 138
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 136
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 129
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 127
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 145
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 141
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 134
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 126
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 136
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 27
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 61
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 72
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 43
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 54
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 30
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 72
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 55
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 36
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 137
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 148
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 148
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 116
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 143
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 103
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 118
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 143
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 143
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 148
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 127
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 113
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 131
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 103
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 131
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 119
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 115
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 111
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 144
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 126
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 112
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 111
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 133
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 115
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 135
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 122
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 144
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 127
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 146
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 146
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 104
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 110
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 29
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 9
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 8
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 7
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 29
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 33
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 33
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 6
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 6
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 6
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 8
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 8
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 33
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 29
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 7
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 9
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 9
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 8
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 29
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 33
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 29
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 47
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 27
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 21
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 22
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 33
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 30
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 25
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 49
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 22
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 49
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 29
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 48
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 45
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 20
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 36
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 48
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 45
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 43
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 44
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 20
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 40
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 22
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 37
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 3
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 0
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 3
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 7
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 4
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 4
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 2
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 5
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 1
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 38
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 39
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 23
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 24
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 38
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 38
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 30
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 21
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 22
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 47
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 46
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 41
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 39
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 28
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 37
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 48
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 37
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 40
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 24
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 33
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 48
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 25
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 45
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 26
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 37
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 30
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 46
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 26
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 21
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 29
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 47
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 33
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 36
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 36
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 38
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 47
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 35
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 41
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 27
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 44
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 24
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 3
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 5
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 1
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 4
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 3
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 0
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 6
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 0
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 0
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 27
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 49
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 21
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 43
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 42
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 40
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 25
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 35
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 42
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 20
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 21
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 23
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 40
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 23
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 24
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 36
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 23
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 45
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 21
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 41
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 20
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 22
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 47
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 48
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 23
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 24
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 21
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 36
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 45
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 46
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 23
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 27
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 42
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 20
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 26
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 21
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 35
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 20
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 34
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 42
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 26
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 48
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 48
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 49
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 1
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 6
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 7
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 4
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 3
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 5
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 4
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 0
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 2
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 38
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 37
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 27
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 21
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 39
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 23
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 29
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 26
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 40
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 25
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 29
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 21
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 37
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 37
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 30
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 39
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 38
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 35
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 42
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 38
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 25
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 45
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 49
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 49
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 44
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 24
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 22
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 37
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 41
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 35
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 22
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 20
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 28
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 25
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 46
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 43
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 41
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 28
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 46
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 46
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 42
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 37
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 40
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 22
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 26
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 42
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 28
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 36
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 2
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 7
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 5
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 6
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 4
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 1
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 6
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 7
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 0
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 45
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 26
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 43
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 46
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 35
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 42
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 30
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 46
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 21
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 29
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 41
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 34
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 48
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 23
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 30
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 34
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 28
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 48
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 44
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 40
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 44
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 49
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 28
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 35
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 43
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 24
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 34
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 22
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 38
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 20
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 50
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 48
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 29
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 32
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 44
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 37
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 38
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 28
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 27
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 31
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 23
  },
  {
    "Time": "07:00:00",
    "variable": "BusCount",
    "value": 33
  },
  {
    "Time": "07:15:00",
    "variable": "BusCount",
    "value": 36
  },
  {
    "Time": "07:30:00",
    "variable": "BusCount",
    "value": 44
  },
  {
    "Time": "07:45:00",
    "variable": "BusCount",
    "value": 26
  },
  {
    "Time": "08:00:00",
    "variable": "BusCount",
    "value": 48
  },
  {
    "Time": "08:15:00",
    "variable": "BusCount",
    "value": 24
  },
  {
    "Time": "08:30:00",
    "variable": "BusCount",
    "value": 43
  },
  {
    "Time": "08:45:00",
    "variable": "BusCount",
    "value": 45
  },
  {
    "Time": "09:00:00",
    "variable": "BusCount",
    "value": 28
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 11
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 14
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 10
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 12
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 10
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 15
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 10
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 13
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 10
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 14
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 15
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 10
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 12
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 12
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 14
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 10
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 12
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 13
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 13
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 12
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 10
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 10
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 14
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 10
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 12
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 10
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 13
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 12
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 14
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 15
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 14
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 14
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 14
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 12
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 15
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 13
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 3
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:00:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "07:15:00",
    "variable": "TruckCount",
    "value": 1
  },
  {
    "Time": "07:30:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "07:45:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:00:00",
    "variable": "TruckCount",
    "value": 5
  },
  {
    "Time": "08:15:00",
    "variable": "TruckCount",
    "value": 4
  },
  {
    "Time": "08:30:00",
    "variable": "TruckCount",
    "value": 0
  },
  {
    "Time": "08:45:00",
    "variable": "TruckCount",
    "value": 2
  },
  {
    "Time": "09:00:00",
    "variable": "TruckCount",
    "value": 2
  }
]
const data2 = [
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car_car": 145
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car_car": 114
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 122
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 114
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 107
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 103
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 114
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 145
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 104
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 144
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 57
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 31
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 30
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 61
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 47
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 80
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 49
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 58
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 53
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 110
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 137
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 122
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 114
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 119
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 113
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 118
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 113
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 130
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 129
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 117
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 113
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 117
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 130
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 146
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 110
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 111
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 132
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 141
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 120
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 141
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 107
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 141
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 120
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 113
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 132
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 119
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 133
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 132
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 66
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 27
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 75
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 54
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 54
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 69
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 52
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 66
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 54
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 134
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 117
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 121
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 111
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 144
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 121
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 136
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 114
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 118
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 131
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 148
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 120
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 116
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 137
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 131
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 114
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 102
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 116
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 136
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 103
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 131
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 133
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 136
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 146
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 103
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 135
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 104
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 144
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 132
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 38
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 53
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 30
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 50
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 31
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 28
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 31
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 52
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 42
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 116
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 143
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 118
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 121
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 135
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 100
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 138
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 132
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 104
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 121
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 135
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 117
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 138
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 134
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 146
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 147
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 110
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 110
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 145
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 138
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 136
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 129
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 127
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 149
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 145
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 141
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 134
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 126
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 136
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 140
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 27
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 61
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 72
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 43
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 54
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 30
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 72
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 55
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 36
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 137
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 148
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 148
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 116
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 143
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 103
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 105
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 118
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 143
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 143
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 128
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 148
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 127
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 113
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 131
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 108
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 109
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 125
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 103
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 131
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 119
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 123
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 106
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 115
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 111
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 144
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 126
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 112
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 111
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 133
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 115
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 135
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 142
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 124
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 122
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "07:00:00",
    "variable": "CarCount",
    "value_car": 144
  },
  {
    "Time": "07:15:00",
    "variable": "CarCount",
    "value_car": 127
  },
  {
    "Time": "07:30:00",
    "variable": "CarCount",
    "value_car": 146
  },
  {
    "Time": "07:45:00",
    "variable": "CarCount",
    "value_car": 146
  },
  {
    "Time": "08:00:00",
    "variable": "CarCount",
    "value_car": 101
  },
  {
    "Time": "08:15:00",
    "variable": "CarCount",
    "value_car": 104
  },
  {
    "Time": "08:30:00",
    "variable": "CarCount",
    "value_car": 150
  },
  {
    "Time": "08:45:00",
    "variable": "CarCount",
    "value_car": 110
  },
  {
    "Time": "09:00:00",
    "variable": "CarCount",
    "value_car": 139
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 29
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 9
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 8
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 7
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 29
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 33
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 33
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 6
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 6
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 6
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 8
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 8
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 33
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 36
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 29
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 7
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 9
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 9
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 24
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 23
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 21
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 8
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 29
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 37
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 12
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 16
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 38
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 32
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 27
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 15
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 30
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 28
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 25
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 17
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 26
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 31
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 33
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 18
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 39
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 34
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 35
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 40
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 11
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 29
  },
  {
    "Time": "09:00:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "07:00:00",
    "variable": "BikeCount",
    "value_car": 14
  },
  {
    "Time": "07:15:00",
    "variable": "BikeCount",
    "value_car": 13
  },
  {
    "Time": "07:30:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "07:45:00",
    "variable": "BikeCount",
    "value_car": 22
  },
  {
    "Time": "08:00:00",
    "variable": "BikeCount",
    "value_car": 10
  },
  {
    "Time": "08:15:00",
    "variable": "BikeCount",
    "value_car": 19
  },
  {
    "Time": "08:30:00",
    "variable": "BikeCount",
    "value_car": 20
  },
  {
    "Time": "08:45:00",
    "variable": "BikeCount",
    "value_car": 35
  }
]

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Traffic Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data} // Use just one dataset
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="Time" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="value_car"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
            {/* Additional Area for data2 */}
            <Area
              type="monotone"
              dataKey="value2" // Assuming 'value2' is the key in data2
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
