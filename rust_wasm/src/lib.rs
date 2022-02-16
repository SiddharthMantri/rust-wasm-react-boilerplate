pub extern "C" fn fib(n: i32) -> i32 {
    if n < 0 {
        panic!("{} is negative!", n);
    }
    match n {
        0 => panic!("zero is not a right argument to fibonacci_reccursive()!"),
        1 | 2 => 1,
        _ => fib(n - 1) + fib(n - 2),
    }
}
