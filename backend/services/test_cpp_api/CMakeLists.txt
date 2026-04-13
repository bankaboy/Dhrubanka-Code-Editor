cmake_minimum_required(VERSION 3.10)
project(RestfulApi)

set(CMAKE_CXX_STANDARD 17)

find_package(Boost REQUIRED COMPONENTS system)
find_package(Threads REQUIRED)

add_executable(RestfulApi main.cpp)

target_include_directories(RestfulApi PRIVATE ${Boost_INCLUDE_DIRS} include)

target_link_libraries(RestfulApi ${Boost_LIBRARIES} Threads::Threads)