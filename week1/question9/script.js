function calculateTraingleArea(lef, rig, btm) {
  let SemiPerimeter = (lef + rig + btm) / 2;
  let area = Math.sqrt(
    SemiPerimeter *
      (SemiPerimeter - lef) *
      (SemiPerimeter - rig) *
      (SemiPerimeter - btm),
  );
  console.log(area);
}
calculateTraingleArea(3,4,5)