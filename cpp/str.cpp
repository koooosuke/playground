#include <iostream>
using namespace std;

int main()
{
  string s = "abc";

  if (s == "abc") cout << "equal" << endl;

  char c = s[1];

  s = "def" + s + "ghi";

  cout << s << endl;

  s = s.substr(3, 3);

  cout << s << endl;

  return 0;
}
