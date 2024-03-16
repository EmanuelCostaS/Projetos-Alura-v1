#include <iostream>
using namespace std; // Allow you to writte cout, cin, endl, etc. Instead of std::cout, std::cin, etc

int main(){
    int number;

    cout << "Insert a number and I will guess it: ";
    cin >> number;

    cout << "Your number is " << number;
    return 0;
}