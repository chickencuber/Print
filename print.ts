// deno-lint-ignore-file
export function print(...args: Array<any>) {
    Deno.stdout.writeSync(new TextEncoder().encode(args.join(" ")));
}

export function println(...args: Array<any>) {
    print([...args, "\n"]);
}
