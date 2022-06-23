#include <bits/stdc++.h>
using namespace std;

int main()
{
  int x, a, b;
  cin >> x >> a >> b;

  // 1.の出力
  x++;
  int ans1 = x;

  cout << ans1 << endl;

  int ans2 = ans1 * (a + b);
  cout << ans2 << endl;

  int ans3 = pow(ans2, 2);
  cout << ans3 << endl;

  int ans4 = ans3 - 1;
  cout << ans4 << endl;
}
