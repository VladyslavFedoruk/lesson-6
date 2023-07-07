function userDecision() {

  const a = UserValue("Введіть a");
  if (a === null) {
    return;
  }

  const b = UserValue("Введіть b");
  if (b === null) {
    return;
  }

  const c = UserValue("Введіть c");
  if (c === null) {
    return;
  }

  const Invalid = () => {
    alert("a = 0. Рівняння не має рішень");
  };

  const result = Quadrat(a, b, c, Invalid);

  if (result !== null) {
    if (result.d < 0) {
      alert("D < 0. Рівняння не має рішень");
    } else if (result.d === 0) {
      alert("D = 0. Єдиний корінь рівняння: " + result.x1);
    } else {
      alert("D > 0. Корені рівняння: " + result.x1 + ", " + result.x2);
    }
  }
}

function UserValue(message) {
  while (true) {
    const input = prompt(message);
    if (input === null) {
      alert("Жаль. Сподіваюсь ще побачитись.");
      return null;
    }
    const number = parseFloat(input);
    if (!isNaN(number)) {
      return number;
    }
  }
}

function Quadrat(a, b, c, Invalid) {
  if (a === 0) {
    Invalid();
    return null;
  }

  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return { d: discriminant, x1: null, x2: null };
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return { d: discriminant, x1: x, x2: null };
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return { d: discriminant, x1: x1, x2: x2 };
  }
}

userDecision();
