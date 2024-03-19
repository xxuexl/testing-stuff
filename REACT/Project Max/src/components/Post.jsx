// Creating our fist custom component
const names = ['Mochi', 'Joe', 'Loki']
/* Math.random -> Js function that generates a random number. 0.5(50% chance)
- ? -> Ternary operator. We put the options(0 if true >0.5 or 1 if false). 
":" It separates the two options from the ternary expression */
const Post = () => {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    //It will choose randomly a name (50% chance)
    return (
        <div>
            <p>Hello, {chosenName}!</p>
            <p>Welcome to this little world!</p>
        </div>
    );
}

export default Post

/*{} --> We use them to put any JavaScript expression
React will execute whatever is inside the curly braces and
then output the result of that expression */