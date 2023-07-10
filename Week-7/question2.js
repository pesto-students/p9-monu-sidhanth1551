
let array=[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 

var r=array.length;
var c=array[0].length;
var res=[]



var generateMatrix = function(a,m,n) {
    
    let k=0, l=0;


      
    while (k < m && l < n) {
        /* Print the first row from
               the remaining rows */
        for (i = l; i < n; ++i) {
            res.push(a[k][i]);
        }
        k++;
  
        /* Print the last column
         from the remaining columns */
        for (i = k; i < m; ++i) {
            res.push(a[i][n - 1]);
        }
        n--;
  
        /* Print the last row from
                the remaining rows */
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                res.push(a[m - 1][i]);
            }
            m--;
        }
  
        /* Print the first column from
                   the remaining columns */
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                res.push(a[i][l]);
            }
            l++;
        }
    }

    return res;
};

console.log(generateMatrix(array,r, c))