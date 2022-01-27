package Recursion;

import java.util.Scanner;

public class CheckIfTheNumberISPresentORNot {
    public static boolean checkNumber(int[] input, int x)
    {
        if(input[0] == x){
            return  true;
        }
        int small[] = new int[input.length-1];
        for (int i =1; i<input.length; i++){
            small[i-1] = input[i];
        }
        if(small.length ==0){
            return false ;
        }
        return checkNumber(small, x);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n= sc.nextInt();
        int[] arr = new int[n];
        for(int i =0; i<n; i++){
            arr[i] = sc.nextInt();
        }
        int x = sc.nextInt();
        System.out.println(checkNumber(arr, x));

    }
}
