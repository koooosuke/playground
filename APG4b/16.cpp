#include <bits/stdc++.h>
using namespace std;

int main()
{
  string N;
  cin >> N;

  int count = 0;
  for (int i = 0; i < (int)N.size(); i++)
  {
    char ch = N[i];
    if (N[i - 1] == ch)
    {
      count++;
      if (count >= 2)
      {
        break;
      }
    }
    else
    {
      count = 0;
    }
  }

  if (count >= 2)
  {
    cout << "Yes" << endl;
  }
  else
  {
    cout << "No" << endl;
  }
}
