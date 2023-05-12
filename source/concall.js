export const concall = {
    debounce: (c, d=1000) => {
        let t;
        return (...a) => {
            clearTimeout(t);
            t = setTimeout(() => {
                c(...a)
            }, d)
        }
    },
    throttle: (c, d=1000) => {
        let w = false,
        a;
        const f = () => {
            if (a == null) {
                w = false
            } else {
                c(...a)
                a = null;
                setTimeout(f, d)
            }
        }
        return (...x) => {
            if (w) {
                a = x;
                return;
            }

            c(...x)
            w = true;

            setTimeout(f, d);
        }
    },
    delay: (c, d=1000) => {
        return function(...a) {
            setTimeout(() => c(...a), d);
        }
    },
    repeat: (c, d=1000, t=null) => {
        if (t==null) {
            return function(...a) {
                setInterval(() => c(...a), d);
            }
        } else {
            return function(...a) {
                let p = 0;
                const x = setInterval(() => {
                    p++;
                    if (p == t) clearInterval(x);
                    c(...a);
                }, d);
            }
        }
    }
}

export default concall;