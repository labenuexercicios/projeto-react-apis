export const CoresCartoes = (type) => {
    switch (type) {
      case "bug":
        return '#76A866';
      case "fire":
        return '#EAAB7D';
      case "grass":
        return '#729F92';
      case "normal":
        return '#BF9762';
      case "poison":
        return '#AD61AE';
      case "water":
        return '#71C3FF';
      default:
        return '#71C3FF';
    }
  };