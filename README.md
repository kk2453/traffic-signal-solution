# Traffic Signal Solution

A smart traffic management prototype built for a hackathon to help optimize traffic flow at road junctions using traffic density analysis and machine learning.

The system captures traffic data from multiple roads at a junction, estimates vehicle density, and dynamically adjusts signal timing to reduce congestion. An admin panel was also included to allow traffic operators to manually override automated decisions when needed.

## System Components

### Client Side
- Admin dashboard for monitoring and manual signal override
- Traffic data visualization and signal timing display
- Captures traffic density data from connected camera feeds

### Server Side
- Handles communication between the frontend and ML model
- Processes traffic data and manages timing responses
- Built using Java and Spring Boot

### ML Model
- Random Forest based prediction model trained on publicly available traffic signal datasets
- Calculates optimized signal timing based on traffic density inputs

## Project Workflow

1. Traffic density is captured from multiple roads at a junction
2. Vehicle count data is processed and sent to the ML model
3. The ML model calculates optimized signal timings
4. Timing recommendations are returned to the frontend
5. Admins can manually override decisions if necessary

## Technologies Used

- Java & Spring Boot
- Python
- R
- React
- TypeScript
- Tailwind CSS

## What We Learned

- Multi-component system architecture
- Communication between different services
- Basic machine learning workflow integration
- Real-time data flow handling
- Building operational override systems for automated workflows

## Notes

This project was built as a hackathon prototype and was our first experience working with machine learning systems and cross-stack integration.