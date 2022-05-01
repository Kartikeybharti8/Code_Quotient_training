int findMaxProfit(int prices[], int N) 
{
  int maxProfit = 0, minPrices = prices[0];
  for(int j = 1; j<N; j++)
  {
      if( prices[j]- minPrices > maxProfit)
        maxProfit = prices[j]- minPrices;
    if(prices[j] < minPrices)
      minPrices = prices[j];
    }
  return maxProfit;
}
