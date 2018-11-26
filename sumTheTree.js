/*
Given a node object representing a binary tree, return the sum of all values in the tree, including the root.
Absence of a node will be indicated with a null value.

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null

*/

function sumTheTreeValues(root){
    let total = 0;
    for (let key in root){
        if (key === 'value'){
            total += root[key];
        }
        if (typeof root[key] === 'object'){
            total += sumTheTreeValues(root[key]);
        }
    }
    return total;
}