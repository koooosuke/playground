#include <bits/stdc++.h>
using namespace std;

int main()
{
  int N, A;
  cin >> N;
  cin >> A;

  int rest = N % 500;
  if (A >= rest)
  {
    cout << "Yes" << endl;
  }
  else
  {
    cout << "No" << endl;
  }
}
