// Tracé du circuit de Marina Bay, en SVG.
// TrackMap utilise ce chemin avec getPointAtLength() pour placer les voitures :
// une voiture à lapProgress = 0.5 est au milieu du tracé.

export const TRACK_VIEWBOX = '0 0 1000 600';

/** Chemin fermé du circuit (à retravailler pour coller au Figma). */
export const MARINA_BAY_PATH =
  'M 120 520 L 120 130 Q 120 90 160 90 L 330 90 Q 370 90 370 130 L 370 200 ' +
  'Q 370 230 400 230 L 560 230 Q 590 230 590 200 L 590 120 Q 590 80 630 80 ' +
  'L 860 80 Q 900 80 900 120 L 900 260 Q 900 300 860 300 L 760 300 ' +
  'Q 720 300 720 340 L 720 420 Q 720 460 760 460 L 860 460 Q 900 460 900 500 ' +
  'L 900 530 Q 900 560 870 560 L 620 560 Q 580 560 580 520 L 580 420 ' +
  'Q 580 390 550 390 L 450 390 Q 420 390 420 420 L 420 540 Q 420 570 390 570 ' +
  'L 300 570 Q 270 570 270 540 L 270 380 Q 270 350 240 350 L 210 350 ' +
  'Q 180 350 180 380 L 180 520 Q 180 560 150 560 Q 120 560 120 520 Z';

/** Zones DRS, exprimées en progression sur le tour (0 à 1). */
export const DRS_ZONES: { name: string; from: number; to: number }[] = [
  { name: 'DRS 1', from: 0.0, to: 0.08 },
  { name: 'DRS 2', from: 0.26, to: 0.32 },
  { name: 'DRS 3', from: 0.62, to: 0.68 },
];
