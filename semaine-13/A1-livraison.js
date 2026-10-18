const calculerLivraison = (distanceKm, poidsKg, estUrgent = false) => {
  let tarif = 0;

  if (distanceKm <= 5) {
    tarif = 2000;
  } else if (distanceKm <= 15) {
    tarif = 4000;
  } else {
    tarif = 7000;
  }

  if (poidsKg > 10) {
    tarif += 1500;
  }

  if (estUrgent === true) {
    tarif = tarif * 1.5;
  }

  const avecTVA = tarif * 1.16;
  return Math.round(avecTVA);
};

