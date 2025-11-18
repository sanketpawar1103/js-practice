const makeCounter = (
  a = 0,
) => [() => a++, () => a--, () => ++a, () => --a];

const [a, b, c, d] = makeCounter(1);

[a, a, b, b, c, d, d, a, c, c].map((fn) => fn());
