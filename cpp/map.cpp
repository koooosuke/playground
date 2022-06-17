#include <iostream>
#include <vector>
#include <map>
using namespace std;

void countStrings(vector<string> s)
{
  map<string, int> m;
  for(int i = 0; i < s.size(); i++)
  {
    cout << s[i] << endl;
    cout << m[s[i]] << endl;
    m[s[i]]++;
  }
  map<string, int>::iterator it = m.begin();
  while (it != m.end())
  {
    cout << (*it).first << " " << (*it).second << endl;
    ++it;
  }
}

int main()
{
  vector<string> s(3, "abc");

  countStrings(s);

  return 0;
}

