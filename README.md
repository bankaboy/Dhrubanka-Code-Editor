# Dhrubanka-Code-Editor

The goal of this project is to learn full-stack engineering, system calling, packaging and deploying a product. The product will be a web-based code editor and IDE that initially executes a single Python file and displays the results. The advancements planned after that are:
1. Be able to run code distributed across multiple files (but doesn't require any user input) and create an executable, run it and come back with the result. 
2. Be able to run code that requires user input throughout its execution.
3. The initial plan for this is to just copy the files into a Docker container and then run them there and get the cmd output back to the user. But stopping at that would be the easy way out; the final stage of this would be to implement a Python compiler that takes the code, compiles it, executes it using system calls and then finally returns the output to the backend.

As you can see, the initial goal is easy because the execution method at that point will be to copy the files into a container and run `python user_file.py` inside the container and just return the cmd output. The complexity is kind of manageable because there probably will not be any system procedure calls to make in that version. This approach will probably work even for point one, because you just have to copy all the files to a container and just run `python entry_file.py` and get the final output and return it to the web-based frontend.

Point two is where I have no confirmed idea how to implement it at all. It could require system procedure calls or at least a way of monitoring the container cmd, detecting it is asking for input, carry that to the editor in the frontend, capture the user input and bring it back to the container, and keep doing this until the program execution finishes. This itself will likely take months to implement. 

If point two was where I had no confirmed idea what to do, point three is something that might never be in my skill level ever at all. Building a compiler from scratch would take months, probably over a year, if not years to implement. I will have to relearn data structures and algorithms and be very good at it. Then I will have to relearn compiler and machine automation design modules that I learnt in my undergrad. Then only will I have an idea of what steps to even take. 

Yes, this does sound a lot like JVM and VS Code, and no, this is not an attempt to completely recreate them or compete with them. That would be insanity, considering I have never implemented more than a React + TypeScript frontend, sending requests to a Python backend and then polling it to show updates to the user. Also this is not a vanity project. The goal is to break my back and go through every part of software engineering and system design and data structures and algorithms I possibly can.

The ultimate goal of this project is a learning experience; what it takes to build a frontend, a backend, a system layer and connect all three of them into a single product using the best practices in data structures, algorithms, system designs and of course, coding conventions. 

## Learning Goals

### 1. Full Stack Engineering

  - #### Frontend:
    The goal is to build a responsive, optimised frontend that follows the best building practices. The React + TypeScript framework will be used as I recently started using it at work after avoiding frontend development for years. The two sole reasons to use this framework are 1. to get better at it because it is used a lot and 2. learning how state management works in frontend design and the best practices for user experience. At the moment, there are no plans to make this a desktop application. If in the future I decide to make a desktop application, ElectronJS and React Native will be considered first for ease of implementation. I might consider other options if there are other frameworks at the time that I want to experiment with.

  - #### Backend:
    The goal is to build an optimised backend and use the best practices of data structures, algorithms and system designs in its implementation. This will involve relearning topics like Object Oriented Programming, Encapsulation, Abstraction, Inheritance, different types of methods and more. I learnt all of this in last years of school and starting years of my undergrad. However, I have forgotten these a long time ago and even though I remember the basic concepts of what these are, I can barely implement them at all. Therefore to really go through the concepts at the lowest level possible, a low level programming langauge will be chosen. This will force me to go through theory and implemenation of procedures, building up my confidence and skills. This is further elaborated on in [7. Relearning C/C++ or learn Java or learn Rust](#relearning-C/C++-or-learn-java-or-learn-rust).

  - #### Architecting and Infrastructure:
    The goal is to understand how an architect thinks, what to do they look for deciding on a particular tool and how do they measure and compare the pros and cons of different options. The frontend framework and the backend language has been chosen with Docker as the containerisation approach and these were specifically chosen to get better at or relearn these tools. Everything else, how the frontend and backend communicate, how different services in the backend pass each other data or outputs, what database to use (if using it) and how to connect it to the backend and much more are still left to be decided. A part of the goal is to document every architectural design choice, with an initial plan and how and why it was modified.
    
### 2. System Calling

This will only be relevant once the stage of running code that requires user interaction is reached. At this point, the goal will be to enable the product to interact with the cmd through system calls to monitor the status of the code execution and understand when user input is required and how to communicate with the running Python program. Finally, when the stage of writing a Python compiler is reached, the bulk of the work will be to create a DAG of code blocks and execute them using system calls. The goal of this is to understand how a product uses the operating system to execute services like input/output (I/O) operations, network communication, and memory management. 

### 3. Testing

Unfortunately, most of the projects I've done upto now did not involve any testing at all. This was due to either not knowing what tests were, to just implementing something being good enough to show to my professors, or being under the pressure to deliver and _"tests take time"_. Due to this I've never really developed a mindset of testing and what kind of tests need to be carried in the frontend, backend etc. The full list of tests that I need to follow to be allowed to even think of any deployment is in [Rules: 2 Completely Tested](#completely-tested).

### 4. Performance

This has been somewhat already covered in [frontend](#frontend) and [backend](#backend), but optimising the code is not the only way to improve the performance of the system. The goal is to improve the peformance of the product keeping in mind things like I/O performance, database (if using) querying patterns and predicate pushdown, concurrency, menory management and content delivery. Here is a list of ways the performance can be improved: 

#### a. Algorithmic and Code Optimization
  - Data Structure Choices: Select appropriate data structures (e.g., using a hash table instead of a list for faster lookup times).
  - Algorithm Efficiency: Refactor code to improve time complexity, replacing inefficient algorithms with more efficient alternatives.
  - Reduce Complexity: Avoid unnecessary nested loops, excessive recursion, and redundant computations.
  - Lazy Evaluation: Implement lazy loading to defer initialization of objects until needed, reducing initial load times. 

#### b. Database and I/O Performance
  - Indexing: Index database tables properly to accelerate query times.
  - Caching: Store frequently accessed data in memory using systems like Redis or Memcached to reduce database load.
  - Query Optimization: Optimize SQL queries by avoiding SELECT * and using efficient query plans.
  - Reduce I/O: Minimize file system read/writes and database calls. 

#### c. Concurrency and Resource Management
  - Asynchronous Programming: Use async/await patterns to handle I/O-bound tasks without blocking the main execution thread.
  - Multi-threading/Multiprocessing: Distribute heavy CPU tasks across multiple cores to increase throughput.
  - Memory Management: Optimize memory usage to reduce garbage collection overhead and prevent leaks. 

#### d. Frontend and Web Performance
  - Compression & Minification: Minify CSS and JavaScript, and use compression (e.g., gzip) to reduce file sizes.
  - Content Delivery Network (CDN): Use a CDN to deliver static assets, reducing network latency.
  - Optimized Assets: Optimize image sizes and formats.

### 5. Containerisation

The goal is to distribute the workslow in to different services, independent of each other. This is to gain practice of using Docker and not just Docker Compose and understand how these containers interact with the host system and each other. 

### 6. Monitoring

The goal is to set up monitoring following the packaging of the service to understand how to interpret different metrics and indicators. The health of the services is not enough by themselves to imply that a product is working fine. A list of metrics to monitor after deployment (not exhaustive): 

#### a. Application Performance Monitoring (APM) Metrics 
  - These measure the "golden signals" of application health. 
  - Latency/Response Time: How long it takes to process requests (e.g., page load times, API response speeds).
  - Throughput/Request Rate: The number of requests the application handles, typically measured in requests per second (RPS).
  - Error Rate: The percentage of HTTP 4xx or 5xx requests compared to total requests.
  - Saturation/Resource Utilization: How "full" the service is (e.g., CPU load, memory usage, disk I/O, network bandwidth).
  - Database Performance: Key query execution time, connection pool usage, and transaction locking. 

#### b. Infrastructure & System Health Metrics
  - Uptime/Availability: Percentage of time the service is accessible.
  - Log Volume & Anomalies: Drastic changes in log activity (e.g., unexpected spikes or zero logs).
  - Dependency Health: Health of third-party services, APIs, and microservices.

### 7. Relearning C/C++ or learn Java or learn Rust

  As mentioned in [1. Full Stack Engineering: Backend](#backend), the goal is to use a low level language for the backend to be incetivise myself to relearn the concepts and painstakingly debug the lowest level of problems that can happen. A very good example is even basic socket programming in C is a nightmare and requires you to know concepts like handshaking, protocols (like TCP, UDP, FTP) and authentication even before you write a file transfer program. This is the reason why the only languages considered for the backend are C, C++, Java and Rust. 

  - #### Relearning C/C++:
    Using TypeScript made me realise how much I loved languages with curly brackets. Since C and C++ were the first ever languages I learnt, I am considering these as the two main options for the implementation of the backend. Returning to C and C++ will be really hard challenge since both TypeScript & JavaScript have a lot of abstraction to it. Adittionally, 
    
  - #### Learn Java or Rust:
    Java was considered for two reasons: 1. It was pushed a lot in my undergraduate program and I never really learnt it because the only module where it was used was in Big Data Processing for Map-Reduce and 2. It is used a lot even now being the primary choice for the backend of most heavy duty applications, particularly banks. However, using Java would mean learning an almost unfamiliar language while also trying to learn a lot of engineering. This would be even more profound in using Rust, even though I have repeatedly heard is a good language, is a language I have never ever seen any code of. 

Final verdict is to use C++ for the backend development to pick a middle ground between going low level and ease of implementation. 

## Rules

### 1. No AI

Of course, not literally **"NO AI"**, that would be stupid. It is a useful tool (the list of tests in the next section was AI generated by AI), and has helped me a lot at work in bridging my knowledge quickly while on projects. But using it similarly here would defeat the entire purpose of the project. This project is for me relearn core principles of software engineering and learn how to build a product from frontend all the way to system level and deploy it. Also I do not have a very largely funded private GitHub account to be able to use the same amount of it as I do at work. Ultimately, whether the bubble bursts or not, being a good engineer and architect will always come in handy.

### 2. Completely Tested

These are the following sets that I will set as a goal to implement in the product:

  #### a. Front-End Testing (User Interface) 
  - Unit Testing: Testing individual UI components (e.g., buttons, forms) in isolation using tools like Jest or Jasmine.
  - Component Testing: Verifying that React, Angular, or Vue components render and behave correctly.
  - UI/Functional Testing: Ensuring the frontend acts according to design, using tools like Cypress or Selenium to simulate user clicks. 

  #### b. Back-End Testing (Server & Data) 
  - Unit Testing (Backend): Testing individual backend functions, methods, or classes (e.g., business logic in Node.js, Python, or Java).
  - API Testing: Testing API endpoints to ensure they return the correct data, status codes, and handle errors (using Postman or Supertest).
  - Database Testing: Ensuring data is correctly stored, retrieved, and updated in databases like SQL or MongoDB. 

  #### c. Integration & System Testing
  - Integration Testing: Testing how components work together, such as validating that the front-end successfully communicates with the API and database.
  - End-to-End (E2E) Testing: Testing the entire application flow from start to finish—simulating real user behavior in a browser.
  - Regression Testing: Ensuring new changes or updates do not break existing functionality. 

  #### d. Non-Functional Testing
  - Performance Testing: Checking the application's speed, responsiveness, and stability under load using tools like JMeter or k6.
  - Security Testing: Identifying vulnerabilities (e.g., SQL injection, XSS) to ensure data protection.
  - Accessibility Testing: Ensuring the app is usable by people with disabilities. 

  #### Popular Full-Stack Testing Tools
  - JavaScript/Frontend: Jest, Mocha, Cypress, Playwright.
  - Backend/API: Postman, Supertest, JUnit, PyTest.
  - Performance: JMeter, k6. 

### 3. Best Practices for CI/CD

Similar to testing, most of my projects I have worked alone or worked with others who also did not have the best approaches in mind. Therefore, I do not have a strong base in Git (I have used mostly pull-add-commit-push-repeat) and CI/CD. Every feature should be broken down to the smallest possible item of work and then this work is what will be carried out on a single branch. Every commit should have the smallest amount of work possible. Since I will the only one working on this, there is no hard rule on when to push and to avoid stagnation and frustation, I am allowed to work on multiple features/branches in the same time period. However, any PR I raise from any branch can only be reviewed on the next day that I work on the project to allow as much of an independent review as possible.

### 4. No copying files, only referencing

This has been added on as after more research I found that such a tool called [Ray](https://github.com/ray-project/ray) already exists. To avoid just mindlessly copying Ray to make this, I am allowed to reference the documentation of Ray, and only be allowed to look at the files when I cannot figure out an answer after referencing the internet.

## Notes

##### 27-03-2026: 
As I was writing the first version of this README, I realised that what I am trying to make here sounds like a mix of Apache Spark and JVM using C++, which might be very very diffcult considering Spark was made by a group of PhD students. With slightly more research, I have found out that this already exists and is called Ray, and therefore a new rule of [No Copying](###no-copying-files-only-referencing) has been added. 


## Versions

##### 1. 27-03-2026: 
Added intro, goals, rules. Likely these sections will be changed a lot as I learn more and reconsider things
