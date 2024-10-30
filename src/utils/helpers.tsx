const getLocalGreeting = (): string => {
  const now = new Date();
  const hours = now.getHours();
  let greeting;
  if (hours >= 5 && hours < 12) {
    greeting = '¡Buenos días!';
  } else if (hours >= 12 && hours < 17) {
    greeting = '¡Buenas tardes!';
  } else {
    greeting = '¡Buenas noches!';
  }
  return greeting;
};

export const helpers = {
  getLocalGreeting,
};
