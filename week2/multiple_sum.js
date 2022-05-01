long long int multipleSum(int x){
    long n;
    n = x / 3;
    long sum3 = (n * (2*3 + (n-1)*3)) / 2;
    n = x / 5;
    long sum5 = (n * (2*5 + (n-1)*5)) / 2;
    n = x / 15;
    long sum15 = (n * (2*15 + (n-1)*15)) / 2;
    return sum3 + sum5 - sum15;
}
