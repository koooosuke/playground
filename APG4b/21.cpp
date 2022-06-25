#include <bits/stdc++.h>
using namespace std;
#define rep(i, n) for (int i = 0; i < (int)(n); i++)

int main()
{
  int N, X;
  cin >> N >> X;

  string str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  string calcStr = "";
  rep(i, str.size())
  {
    char ch = str[i];
    rep(j, N)
    {
      calcStr += ch;
    }
  }
  cout << calcStr[X - 1] << endl;
}
