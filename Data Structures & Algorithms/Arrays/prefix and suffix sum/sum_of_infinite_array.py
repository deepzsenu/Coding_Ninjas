def sumInRanges(arr, n, queries, q):
    # Write your function Here.
    m=7+10**9
    ans=[]
    asm=[0]*(n+1)
    for i in range(n):
        asm[i+1]=(asm[i]+arr[i])%m
    for j in range(q):
        l=queries[j][0]
        r=queries[j][1]
        lc=(asm[n]*((l-1)//n)%m)%m
        rc=(asm[n]*(r//n)%m)%m
        lc=(lc+asm[(l-1)%n])%m
        rc=(rc+asm[r%n])%m
        ans.append((m+rc-lc)%m)
    return(ans)
