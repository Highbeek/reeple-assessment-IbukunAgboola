## 📚  Development Approach and Challenges
# Introduction
In developing the Pop and Chill application, I started by exploring various design inspirations on Dribbble to find a simple, effective design that would meet the project's needs. This approach allowed me to select a design that was both visually appealing and straightforward to implement.

# Development Approach
Choosing React Native CLI:

I opted for React Native CLI over Expo to avoid potential library compatibility issues that might arise with Expo. This choice provided more control over the project setup and dependencies.
Setting Up the Project:

After setting up the React Native CLI, I installed the necessary dependencies, including:
1.React Query: For managing server-state and caching, making data fetching and synchronization more efficient.
2.Axios: For making HTTP requests to fetch live exchange rates and other necessary data.
3.React Navigation: For handling navigation between different screens within the app.
4.Various UI Libraries: Such as @react-native-picker/picker and react-native-dropdown-picker to facilitate user input and selection.


# Structuring the Application:

I organized the app's structure into key directories:
Components: Contains reusable UI components like custom buttons.
Data: Manages data-related operations and state management.
Assets: Includes fonts, icons, images, and constants used throughout the app.
Routes: Manages navigation routes within the application.
Screens: Contains different screen components for the app.
Implementing Features:

# Custom Components: Developed custom components for UI elements such as buttons, ensuring consistency and reusability across the app.
React Query: Utilized React Query to handle data fetching and caching, simplifying state management and reducing the need for boilerplate code.
API Integration:

Evaluated and selected APIs that best suited the project requirements for fetching live exchange rates and other relevant data.
Integrated the chosen APIs into the app to ensure real-time data updates.
Testing and Debugging:

Ran the application on both Android emulators and iOS simulators to test functionality and resolve any issues.
Addressed any bugs and performance issues identified during testing to ensure a smooth user experience.
Challenges Faced
Design Selection:

# Challenge: Finding a design that was both simple and effective.
Solution: Researched on Dribbble and selected a design that met the project’s needs without overcomplicating the implementation.
Library Compatibility:

Challenge: Ensuring compatibility between various libraries and avoiding potential conflicts eg:Picker libary that fit the design used
Solution: Chose React Native CLI for better control and installed dependencies individually to ensure smooth integration.
API Integration:

Challenge: Identifying and integrating the best APIs for live exchange rates.
Solution: Evaluated multiple APIs based on their features and reliability, selecting the one that best fit the project requirements.
Performance Optimization:

Challenge: Optimizing app performance and managing state efficiently.
Solution: Leveraged React Query for data fetching and caching to reduce redundant operations and improve performance.

# Conclusion
The development of the XchangeProp application involved careful planning, selecting appropriate technologies, and overcoming various challenges. The approach taken ensured a well-structured and efficient implementation, providing a robust and user-friendly application. Future improvements could include additional features and further optimizations based on user feedback.

