#include <stdio.h>
#include <iostream>


int ParseRoute(char* src) {
  char buffer[256];
  sprintf(buffer, src);

  std::cout << buffer;

  return 0;
}

int main (int argc, char** argcv) {
  ParseRoute("Hello World from a function");

  return 0;
}