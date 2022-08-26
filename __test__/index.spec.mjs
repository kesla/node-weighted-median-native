import test from "ava";

import { weightedMedian } from "../index.js";

test("returns null with empty array", (t) => {
  t.is(weightedMedian([]), null);
});

test("works with single element", (t) => {
  t.is(weightedMedian([{ value: 1, weight: 1 }]), 1);
});

test("works with 2 elements", (t) => {
  t.is(
    weightedMedian([
      {
        value: 1,
        weight: 1,
      },
      {
        value: 2,
        weight: 1,
      },
    ]),
    1.5
  );

  t.is(
    weightedMedian([
      {
        value: 2,
        weight: 1,
      },
      {
        value: 1,
        weight: 1,
      },
    ]),
    1.5
  );

  t.is(
    weightedMedian([
      {
        value: 1,
        weight: 2,
      },
      {
        value: 2,
        weight: 1,
      },
    ]),
    1
  );

  t.is(
    weightedMedian([
      {
        value: 1,
        weight: 1,
      },
      {
        value: 2,
        weight: 2,
      },
    ]),
    2
  );
});

test("works with 3+ elements", (t) => {
  t.is(
    weightedMedian([
      {
        value: 1,
        weight: 1,
      },
      {
        value: 2,
        weight: 1,
      },
      {
        value: 3,
        weight: 1,
      },
    ]),
    2
  );

  t.is(
    weightedMedian([
      {
        value: 1,
        weight: 1,
      },
      {
        value: 2,
        weight: 1,
      },
      {
        value: 3,
        weight: 2,
      },
    ]),
    2.5
  );

  t.is(
    weightedMedian([
      {
        value: 1,
        weight: 1,
      },
      {
        value: 2,
        weight: 2,
      },
      {
        value: 3,
        weight: 1,
      },
      {
        value: 4,
        weight: 2,
      },
    ]),
    2.5
  );

  t.is(
    weightedMedian([
      {
        value: 1,
        weight: 5,
      },
      {
        value: 2,
        weight: 2,
      },
      {
        value: 3,
        weight: 1,
      },
      {
        value: 4,
        weight: 2,
      },
    ]),
    1.5
  );

  t.is(
    weightedMedian([
      {
        value: 1,
        weight: 6,
      },
      {
        value: 2,
        weight: 2,
      },
      {
        value: 3,
        weight: 1,
      },
      {
        value: 4,
        weight: 2,
      },
    ]),
    1
  );
});
