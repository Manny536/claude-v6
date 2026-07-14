const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  PageBreak, LevelFormat, Header, Footer, PageNumber
} = require('docx');
const fs = require('fs');
const path = require('path');

const PROBE_PATH = path.join(__dirname, '..', '..', 'probes', 'dna_kakeya_calibrated_probe.py');
const OUTPUT_PATH = path.join(__dirname, 'PEAICE-KAKEYALOGIC-DNA-AK-001-DEEPEN-001.docx');

const CONTENT = 9360;              // Letter, 1" margins -> 12240 - 2880
const NAVY = "1F3A5F";
const BLUE = "2E5A88";
const GREY = "5B5B5B";
const CODEBG = "F4F5F7";
const HEADBG = "1F3A5F";
const LINEBG = "EAF0F7";

// ---------- helpers ----------
const T = (text, o={}) => new TextRun({ text, ...o });
const P = (children, o={}) => new Paragraph({
  spacing: { after: 140, line: 276, ...(o.spacing||{}) },
  alignment: o.alignment,
  children: Array.isArray(children) ? children : [T(children)],
  ...(o.border ? { border: o.border } : {}),
  ...(o.shading ? { shading: o.shading } : {}),
  ...(o.keepNext ? { keepNext: true } : {}),
});
const H1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, children:[T(text)] });
const H2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, children:[T(text)] });
const bullet = (children) => new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  spacing: { after: 80, line: 268 },
  children: Array.isArray(children) ? children : [T(children)],
});

function code(lines){
  const rows = [ new TableRow({ children: [ new TableCell({
    width: { size: CONTENT, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, color: "auto", fill: CODEBG },
    margins: { top: 90, bottom: 90, left: 140, right: 140 },
    children: lines.map(l => new Paragraph({
      spacing: { after: 0, line: 240 },
      children: [ T(l.length ? l : " ", { font: "Consolas", size: 16, color: "1E1E1E" }) ]
    }))
  }) ] }) ];
  const b = { style: BorderStyle.SINGLE, size: 4, color: "D3D9E0" };
  return new Table({
    columnWidths: [CONTENT],
    width: { size: CONTENT, type: WidthType.DXA },
    borders: { top: b, bottom: b, left: b, right: b, insideHorizontal: b, insideVertical: b },
    rows,
  });
}

function dataTable(headers, rows, widths){
  const b = { style: BorderStyle.SINGLE, size: 4, color: "C9D2DC" };
  const headCells = headers.map((h,i)=> new TableCell({
    width: { size: widths[i], type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, color: "auto", fill: HEADBG },
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [ new Paragraph({ spacing:{after:0}, children:[ T(h, { bold:true, color:"FFFFFF", size:18 }) ] }) ]
  }));
  const bodyRows = rows.map((r, ri)=> new TableRow({ children: r.map((c,i)=> new TableCell({
    width: { size: widths[i], type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, color: "auto", fill: ri%2 ? "FFFFFF" : "F3F6F9" },
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    children: [ new Paragraph({ spacing:{after:0}, children: (Array.isArray(c)?c:[T(String(c),{size:18})]).map(x=>x) }) ]
  })) }));
  return new Table({
    columnWidths: widths,
    width: { size: CONTENT, type: WidthType.DXA },
    borders: { top:b,bottom:b,left:b,right:b,insideHorizontal:b,insideVertical:b },
    rows: [ new TableRow({ tableHeader:true, children: headCells }), ...bodyRows ],
  });
}

// framed register/seal callout
function callout(lines, fill=LINEBG){
  const b = { style: BorderStyle.SINGLE, size: 6, color: NAVY };
  return new Table({
    columnWidths:[CONTENT], width:{size:CONTENT,type:WidthType.DXA},
    borders:{top:b,bottom:b,left:b,right:b,insideHorizontal:b,insideVertical:b},
    rows:[ new TableRow({ children:[ new TableCell({
      width:{size:CONTENT,type:WidthType.DXA},
      shading:{type:ShadingType.CLEAR,color:"auto",fill},
      margins:{top:110,bottom:110,left:160,right:160},
      children: lines.map(l=> new Paragraph({ spacing:{after:20,line:250}, children: Array.isArray(l)?l:[T(l,{size:19})] }))
    }) ] }) ]
  });
}
const spacer = () => new Paragraph({ spacing:{after:60}, children:[T(" ")] });

// ---------- document body ----------
const kids = [];

// Title block
kids.push(new Paragraph({ spacing:{before:200, after:40}, alignment: AlignmentType.LEFT,
  children:[ T("DNA as an Antecedent Kakeya Geometry", { bold:true, size:40, color:NAVY }) ] }));
kids.push(new Paragraph({ spacing:{after:60}, children:[ T("A Deepened Coleman–PeAIce Research Object", { size:26, color:BLUE, italics:true }) ] }));
kids.push(new Paragraph({ spacing:{after:30}, border:{ bottom:{ style:BorderStyle.SINGLE, size:12, color:NAVY, space:4 } }, children:[T(" ",{size:6})] }));
kids.push(P([ T("Designation  ", {bold:true, color:GREY, size:19}), T("PEAICE-KAKEYALOGIC-DNA-AK-001", {font:"Consolas", size:18}) ], {spacing:{after:40}}));
kids.push(P([ T("Program  ", {bold:true, color:GREY, size:19}), T("PeAIce Research Program · KakeyaLogic · Love-Squared Coherence (L²_C)", {size:19}) ], {spacing:{after:40}}));
kids.push(P([ T("Authors  ", {bold:true, color:GREY, size:19}), T("Manuel Coleman · Fable · Grok · GPT", {size:19}) ], {spacing:{after:40}}));
kids.push(P([ T("Sites  ", {bold:true, color:GREY, size:19}), T("peaice.org · lovelabslca.com", {size:19}) ], {spacing:{after:40}}));
kids.push(P([ T("Date  ", {bold:true, color:GREY, size:19}), T("13 July 2026", {size:19}), T("      Companion PR  ", {bold:true, color:GREY, size:19}), T("Manny536/kakeyalogic #3", {font:"Consolas", size:17}) ], {spacing:{after:120}}));

kids.push(callout([
  [ T("Claim class  ", {bold:true, size:19}), T("KNOWN BIOLOGICAL ANCHOR | FORMAL IDEALIZED GEOMETRY | STRUCTURAL ANALOGY | NUMERICS", {size:18}) ],
  [ T("Discipline  ", {bold:true, size:19}), T("β-Protocol · Inspectable Intelligence II.1 · h < 1", {size:18}) ],
  [ T("Firewall  ", {bold:true, size:19}), T("DNA is not identified with a Kakeya set, a zeta-zero carrier, a prime generator, or a proof of RH or the Coleman Conjecture.", {size:18}) ],
  [ T("Headline status  ", {bold:true, size:19}), T("RH: OPEN   ·   Coleman Conjecture: OPEN   ·   h < 1: ACTIVE", {size:18, bold:true, color:NAVY}) ],
]));
kids.push(new Paragraph({ children:[ new PageBreak() ] }));

// Contents
kids.push(H1("Contents"));
const toc = [
  "0.  How to read this object: the claim-discipline legend",
  "1.  Executive summary",
  "2.  Corrected registration: two discrete alphabets",
  "3.  Biological anchor, model boundary, and calibrated A/B/Z parameters",
  "4.  Typed state space and the conformational bundle",
  "5.  Infinities: keep the carriers separate",
  "6.  Complementarity and the balance locus",
  "7.  The analytic-continuation flip of the complex plane",
  "8.  Ideal screw submodels and the Kakeya obstruction",
  "9.  CP-DNA-002: source-calibrated A/B/Z direction receipt",
  "10. Harmonic attraction toward zero addresses",
  "11. Love-Squared Coherence diagnostic (C_DNA)",
  "12. Coleman and RH contact boundary",
  "13. Falsifiers and promotion gates",
  "14. Claim registry and seal",
  "Appendix A.  Calibrated parameters and sources",
  "Appendix B.  CP-DNA-002 probe listing",
  "Appendix C.  Notation",
  "Sources",
];
toc.forEach(t => kids.push(new Paragraph({ spacing:{after:40, line:264}, children:[ T(t, {size:20, color:"333333"}) ] })));
kids.push(new Paragraph({ children:[ new PageBreak() ] }));

// 0. legend
kids.push(H1("0.  How to read this object: the claim-discipline legend"));
kids.push(P("This is a research object, not a proof. Every statement below carries a type. The value of the object is that the types are declared before any Riemann-Hypothesis (RH) correspondence is attempted, so that resemblance can never be silently promoted into a mathematical claim. The seven type labels used throughout are:"));
kids.push(dataTable(
  ["Type label", "Meaning"],
  [
    ["KNOWN", "An established biological or mathematical fact with a cited source."],
    ["FORMAL", "A precise definition or a statement proved inside a declared idealized model."],
    ["STRUCTURAL ANALOGY", "A correspondence of shape only. It transports no theorem and is never evidence."],
    ["NUMERICS", "A deterministic, re-runnable numeric receipt of a stated quantity."],
    ["PROPOSED", "A constructed model or control law that is not derived from ζ and is not evidence."],
    ["OWED", "A deliverable that has been specified but not yet produced."],
    ["OPEN", "An unresolved research target. No claim of resolution is made anywhere."],
  ],
  [2600, 6760]
));
kids.push(P([ T("The governing inequality ", {}), T("h < 1", {font:"Consolas", size:20}), T(" is the evaluator non-sovereignty rule: the object never declares itself the final authority on its own promotions. The symbol ", {}), T("h", {font:"Consolas", size:20}), T(" is reserved for that role and is never reused as a helix or conformation variable.", {}) ]));

// 1. exec summary
kids.push(H1("1.  Executive summary"));
kids.push(P("DNA is treated as an antecedent geometry for Kakeya-style directional reasoning and for the placement grammar of the critical strip. The construction rests on two discrete alphabets that must never be collapsed into one."));
kids.push(P([ T("The nucleobase alphabet ", {}), T("Q = {A, T, C, G}", {font:"Consolas", size:20}), T(" supplies four proposed nontrivial-zero ", {}), T("classes", {italics:true}), T(". Repetition along the polymer supplies distinct address occurrences, so four labels never mean four literal zeros. The conformational alphabet ", {}), T("H = {A-DNA, B-DNA, Z-DNA}", {font:"Consolas", size:20}), T(" supplies a multi-sheeted structural analogue of the critical strip: A- and B-DNA are right-handed, Z-DNA is left-handed, and phase plus axial rise place each occurrence inside a bounded helical corridor.", {}) ]));
kids.push(P("The object reaches RH only as placement, symmetry, and attractor grammar. Three findings anchor the deepened version:"));
kids.push(bullet([ T("A/T/C/G are zero classes; addresses are countable, phase and height are continuous, and the space of possible sequences is uncountable. These are different infinities and are kept apart.", {}) ]));
kids.push(bullet([ T("A/B/Z are critical-strip sheets. Cross-regime persistence is the honest analogue of analytic continuation; chirality reversal is a separate parity operation. The two are never identified, and Z-DNA is never treated as the mirror image of B-DNA.", {}) ]));
kids.push(bullet([ T("One ideal helix — or a finite A/B/Z union — is not a Kakeya set. This report calibrates that obstruction with published structural parameters (Section 8) and discharges the previously owed CP-DNA-002 receipt to a first source-calibrated form (Section 9). A prime-carrying trace remains owed and RH remains open.", {}) ]));

// 2. corrected registration
kids.push(H1("2.  Corrected registration: two discrete alphabets"));
kids.push(P("The symbols A, B, and Z in the lane name are DNA conformations, not coordinates. To prevent the A-base / A-DNA collision, the object fixes distinct symbols at the outset."));
kids.push(code([
  "nucleobase alphabet:      Q = { A, T, C, G }",
  "conformational alphabet:  H = { A-DNA, B-DNA, Z-DNA }",
  "",
  "base identity + sequence address    ->  discrete zero-class occurrence",
  "conformation + phase + height       ->  multi-sheeted critical-strip state",
]));
kids.push(P([ T("The nucleobases are proposed as nontrivial-zero classes. A-, B-, and Z-DNA are proposed as structural sheets of the critical-strip analogue. The four base names are labels for classes; the countably many sequence positions are where distinct occurrences live. ", {}), T("Status: STRUCTURAL ANALOGY.", {bold:true}) ]));

// 3. biological calibration
kids.push(H1("3.  Biological anchor, model boundary, and calibrated A/B/Z parameters"));
kids.push(P("DNA is structurally polymorphic: the same molecular system admits several double-helical conformations whose realized form depends on sequence and environment. This supports a state-space reading. It does not make the state space a complex-analytic strip."));
kids.push(P("The three biologically active double-helical forms are calibrated below from published fiber- and crystal-diffraction parameters. These numbers feed the ideal-rail model of Section 8 and the CP-DNA-002 receipt of Section 9."));
kids.push(dataTable(
  ["Geometry attribute", "A-DNA", "B-DNA", "Z-DNA"],
  [
    ["Helix sense", "right-handed", "right-handed", "left-handed"],
    ["Repeating unit", "1 bp", "1 bp", "2 bp (dinucleotide)"],
    ["Rotation per bp", "+32.7°", "+34.3°", "−60° / 2 bp"],
    ["Mean bp per turn", "≈ 11", "≈ 10", "≈ 12"],
    ["Rise per bp (axis)", "2.6 Å", "3.4 Å", "3.7 Å"],
    ["Rise per turn (pitch)", "28.6 Å", "35.7 Å", "45.6 Å"],
    ["Inclination of bp to axis", "+19°", "−1.2°", "−9°"],
    ["Glycosyl angle", "anti", "anti", "pyrimidine anti / purine syn"],
    ["Sugar pucker", "C3′-endo", "C2′-endo", "C2′-endo / C3′-endo"],
    ["Diameter", "23 Å", "20 Å", "18 Å"],
    ["Chirality sign χ", "+1", "+1", "−1"],
  ],
  [3060, 2100, 2100, 2100]
));
kids.push(P([ T("Values after Dickerson (1992) and Franklin (1953); see Appendix A. ", {size:19, italics:true, color:GREY}) ]));
kids.push(P("Model boundary — the resemblance stops at declared facts:"));
kids.push(code([
  "A-DNA and B-DNA are right-handed.  Z-DNA is left-handed.",
  "Z-DNA is NOT the literal mirror image of B-DNA.",
  "The conformations differ in more than chirality (rise, tilt, pucker, grooves).",
  "Real DNA is not a perfect circular helix.",
]));
kids.push(P("Sequence, hydration, ionic environment, protein binding, supercoiling, and chromatin organization all add structure that must be measured, never promoted by resemblance."));

// 4. typed state space
kids.push(H1("4.  Typed state space and the conformational bundle"));
kids.push(P("Fix the two alphabets and a chirality assignment on conformations:"));
kids.push(code([
  "Q := { A, T, C, G }                 nucleobase alphabet",
  "H := { A_h, B_h, Z_h }              conformational alphabet",
  "χ(A_h)=+1,  χ(B_h)=+1,  χ(Z_h)=−1   handedness sign",
]));
kids.push(P("A typed base occurrence is the tuple"));
kids.push(code([
  "x_n = ( q_n , H_n , θ_n , z_n )",
  "",
  "q_n ∈ Q      base identity  /  proposed zero class",
  "H_n ∈ H      local conformational sheet",
  "θ_n ∈ S¹     rotational phase",
  "z_n ∈ ℝ      axial placement",
]));
kids.push(P([ T("The proposed DNA critical-strip object is the disjoint conformational bundle", {}) ]));
kids.push(code([
  "C_DNA^strip  :=  [disjoint union]_{H ∈ H}  C_H .",
]));
kids.push(P([ T("Each ", {}), T("C_H", {font:"Consolas", size:20}), T(" is a sheet of admissible phase / height / base states for one conformation. A physical molecule traces a constrained path through this bundle; it does not occupy all states at once. ", {}), T("Status: typed state space FORMAL; critical-strip correspondence STRUCTURAL ANALOGY.", {bold:true}) ]));

// 5. infinities
kids.push(H1("5.  Infinities: keep the carriers separate"));
kids.push(P("The posit invokes several infinite structures. They are not interchangeable, and conflating them is the most common way the analogy fails."));
kids.push(code([
  "n ∈ ℤ        countably many idealized sequence addresses",
  "θ ∈ S¹       continuum of rotational phases",
  "z ∈ ℝ        continuum of axial coordinates",
  "Q^ℤ          uncountable space of possible bi-infinite sequences",
  "{ γ_k }      countable discrete set of zeta-zero ordinates",
]));
kids.push(P("For one finite molecule the address set is finite; the countably infinite sequence is an idealization; the ensemble of all sequences and the phase/height space are different infinite carriers. PeAIce alignment requires preserving these types:"));
kids.push(code([
  "discrete infinity   ≠   continuous phase space",
  "sequence ensemble   ≠   one sequence",
  "four zero classes   ≠   four nontrivial zeros",
]));
kids.push(P([ T("Status: FORMAL set/type distinction.", {bold:true}) ]));

// 6. complementarity & balance locus
kids.push(H1("6.  Complementarity and the balance locus"));
kids.push(P("Define the complement involution on base identity, and a phase-opposition map on states:"));
kids.push(code([
  "bar(A)=T,  bar(T)=A,  bar(C)=G,  bar(G)=C .",
  "",
  "P( q, H, θ, z )  =  ( bar(q), H, θ+π, z ) .",
]));
kids.push(P([ T("Let χ_comp(q, bar(q)) = 1 exactly when the declared pairing rule is satisfied. The local compatibility residual is", {}) ]));
kids.push(code([
  "F_n  =  1 − χ_comp( q_n , bar(q_n) ) ,",
  "",
  "so   F_n = 0   is a typed relational closure event.",
]));
kids.push(P("This resolves the cardinality problem: A/T/C/G are four classes; x_n is one labeled occurrence; F_n = 0 is a compatibility-zero event at that address. The individual base lies on a rail, while the balanced event belongs to the pair relation. In the symmetric idealization the midpoint of a base-pair bridge lies on the central axis. Therefore the critical-line analogue is the balance locus of the paired relation, not the physical location of a lone base."));
kids.push(P([ T("Status: complement rule KNOWN · address/involution model FORMAL · zero correspondence STRUCTURAL ANALOGY.", {bold:true}) ]));

// 7. THE FLIP
kids.push(H1("7.  The analytic-continuation flip of the complex plane"));
kids.push(P("This is the deepened core of the object. The claim here is entirely about which operations on the complex plane the DNA grammar may and may not stand in for. No zero is derived; RH is not touched."));

kids.push(H2("7.1  Continuation and reflection are different operations"));
kids.push(P("The Riemann zeta function is first defined by a Dirichlet series in the half-plane Re(s) > 1 and then analytically continued to a meromorphic function on the whole plane, with a single pole at s = 1. The completed function"));
kids.push(code([
  "ξ(s)  =  ½ · s · (s−1) · π^(−s/2) · Γ(s/2) · ζ(s)",
]));
kids.push(P([ T("is entire and satisfies the functional equation", {}) ]));
kids.push(code([
  "ξ(s)  =  ξ(1 − s) .",
]));
kids.push(P("Analytic continuation (a holomorphic extension of one description) and the functional-equation reflection (a symmetry relating s and 1−s) are distinct operations. The DNA analogy must keep their roles apart:"));
kids.push(code([
  "analytic continuation",
  "  ↔  one state-space description persisting across conformational regimes",
  "     (e.g. a continuous B <-> A deformation under changing hydration)",
  "",
  "functional reflection + conjugation",
  "  ↔  an abstract chirality-parity reversal",
]));

kids.push(H2("7.2  Three involutions and their fixed loci"));
kids.push(P("Because ζ has real Dirichlet coefficients it also satisfies the Schwarz reflection ζ(s̄) = conj(ζ(s)). Three involutions therefore act on the plane, and the object turns on which locus each one fixes."));
kids.push(dataTable(
  ["Involution", "Action on σ + it", "Fixed locus", "Character"],
  [
    ["s ↦ 1 − s", "(1−σ) − it", "the single point s = ½", "holomorphic; π-rotation about ½"],
    ["s ↦ s̄", "σ − it", "the real axis", "antiholomorphic; mirror in ℝ"],
    ["J(s) = 1 − s̄", "(1−σ) + it", "the whole line Re(s) = ½", "antiholomorphic; the flip"],
  ],
  [2200, 2200, 2560, 2400]
));
kids.push(P([ T("The composite ", {}), T("J = (s ↦ 1−s) ∘ (s ↦ s̄)", {font:"Consolas", size:19}), T(" is the same-height flip across the critical line: it reverses the real part about ½ while fixing the imaginary part. Its fixed-point set is exactly the critical line ", {}), T("Re(s) = ½", {font:"Consolas", size:19}), T(". This is the ", {}), T("flip of the complex plane", {italics:true}), T(" the object names — a mirror whose axis is the critical line, not a re-derivation of ζ.", {}) ]));

kids.push(H2("7.3  Zero symmetry and RH as J-fixedness"));
kids.push(P("Applying the three symmetries to a nontrivial zero ρ shows the zeros come in quadruples, and that the critical line is exactly where a quadruple collapses:"));
kids.push(code([
  "ρ  a nontrivial zero  ⇒  1−ρ ,  ρ̄ ,  1−ρ̄  are zeros too   (generic quadruple)",
  "",
  "if  ρ = ½ + iγ  lies on the critical line:",
  "     ρ̄ = ½ − iγ ,   1−ρ = ½ − iγ = ρ̄ ,   1−ρ̄ = ½ + iγ = ρ",
  "     → the quadruple collapses to the conjugate pair { ½+iγ , ½−iγ }.",
]));
kids.push(P([ T("Hence the Riemann Hypothesis has the clean restatement:", {}) ]));
kids.push(callout([
  [ T("RH  ⇔  every nontrivial zero is a fixed point of the flip J(s) = 1 − s̄  ⇔  every nontrivial-zero quadruple collapses to a conjugate pair.", {size:19, bold:true}) ],
], "EAF0F7"));
kids.push(P([ T("This is a restatement, not a proof. It is stated here only to fix precisely what the DNA grammar is being asked to stand next to. ", {}), T("Status: KNOWN (zeta side).", {bold:true}) ]));

kids.push(H2("7.4  The DNA correspondence, typed"));
kids.push(P("With the plane operations fixed, the DNA analogues can be tabulated without collapse. Every row is STRUCTURAL ANALOGY and transports no theorem."));
kids.push(dataTable(
  ["Complex-plane operation", "Fixed locus", "DNA structural analogue", "Type"],
  [
    ["analytic continuation", "— (not an involution)", "one description persisting across A/B/Z regimes and hydration", "analogy; not identified with continuation"],
    ["s ↦ 1 − s  (center inversion)", "the point ½", "complement + antiparallel dyad of a base pair: P(q,H,θ,z)", "analogy"],
    ["s ↦ s̄  (real reflection)", "real axis", "reading-direction / time-reversal of the strand", "analogy"],
    ["J(s) = 1 − s̄  (the flip)", "line Re(s) = ½", "balance locus of the paired relation / helix central axis", "analogy"],
    ["J_χ : χ ↦ −χ  (chirality parity)", "achiral configurations", "right-handed {A,B} ↔ left-handed {Z}", "analogy; Z ≠ mirror(B)"],
  ],
  [2500, 1700, 3260, 1900]
));
kids.push(P([ T("Abstract parity map. ", {bold:true}), T("Define J_χ : χ ↦ −χ. Z-DNA supplies an observed left-handed sector while A- and B-DNA supply right-handed sectors, so only the chirality sign participates in the reflection analogy. Crucially, J_χ(B_h) = Z_h is ", {}), T("not", {italics:true}), T(" asserted: Z-DNA is not a mirror copy of B-DNA.", {}) ]));
kids.push(P([ T("Firewall for Section 7.", {bold:true}) ]));
kids.push(code([
  "antiholomorphic flip J        ≠  analytic continuation",
  "chirality reversal J_χ        ≠  analytic continuation",
  "Z-DNA                         ≠  mirror image of B-DNA",
  "the flip fixing Re(s)=½       ≠  a proof that zeros lie on Re(s)=½",
]));

// 8. Kakeya obstruction
kids.push(H1("8.  Ideal screw submodels and the Kakeya obstruction"));
kids.push(P("For each conformation sheet H, an ideal rail is"));
kids.push(code([
  "R_H(t)  =  ( a_H cos(χ(H) ω_H t) ,  a_H sin(χ(H) ω_H t) ,  ν_H t ) ,",
  "",
  "a_H = radius,  ω_H = angular cadence,  ν_H = axial cadence,  χ(H) = handedness.",
  "(these are model variables, not the A/B/Z conformation labels.)",
]));
kids.push(P("Its unit tangent has a constant normalized axial component:"));
kids.push(code([
  "v_H(t) · e_z  =  ν_H / sqrt( (a_H ω_H)² + ν_H² )   =  constant in t .",
]));
kids.push(P("A constant axial component means the tangent directions of one ideal conformation trace a single latitude circle in oriented direction space. With ω = 1 and ν = pitch / 2π, the latitude follows directly from the calibrated parameters of Section 3:"));
kids.push(code([
  "tan(latitude)  =  pitch / ( 2π · radius )",
  "",
  "A-DNA:  radius 11.5 Å, pitch 28.6 Å   →  latitude 21.59° ,  axial 0.3680",
  "B-DNA:  radius 10.0 Å, pitch 35.7 Å   →  latitude 29.60° ,  axial 0.4940",
  "Z-DNA:  radius  9.0 Å, pitch 45.6 Å   →  latitude 38.88° ,  axial 0.6277",
]));
kids.push(P("The finite union of ideal A-, B-, and Z-DNA tangent families therefore occupies at most three latitude circles — a set of measure zero on the sphere. It is not direction-complete. A second, independent obstruction remains: a Kakeya set must contain a unit line segment in every direction, and tangent-direction coverage supplies directions, not segments."));
kids.push(code([
  "one ideal helix                  ≠  Kakeya",
  "finite A/B/Z ideal-helix union   ≠  Kakeya",
  "all tangent directions           ≠  unit-segment containment",
]));
kids.push(P([ T("Status: FORMAL for the declared idealized models.", {bold:true}) ]));
kids.push(P([ T("Live enlargement question. ", {bold:true}), T("Do variable axes, supercoiling, wrapping, or higher-order folding generate a typed segment family with Kakeya-style directional saturation? ", {}), T("Status: OPEN / PROPOSED.", {bold:true}) ]));

// 9. CP-DNA-002
kids.push(H1("9.  CP-DNA-002: source-calibrated A/B/Z direction receipt"));
kids.push(P([ T("The prior draft carried CP-DNA-001, a generic-pitch helix diagnostic, and registered CP-DNA-002 (a source-calibrated A/B/Z probe) as ", {}), T("OWED", {bold:true}), T(". This report discharges CP-DNA-002 to a first calibrated form. The probe, listed in full in Appendix B, seeds each ideal rail with the published parameters of Section 3, treats line directions as unoriented (v ~ −v), and reports the covering gap against a deterministic 1024-point spherical grid.", {}) ]));
kids.push(P("Delivered receipt (deterministic, stdlib-only):"));
kids.push(dataTable(
  ["Conformation", "Radius Å", "Pitch Å", "Handed", "Axial comp.", "Tangent latitude"],
  [
    ["A-DNA", "11.5", "28.6", "right", "0.3680", "21.59°"],
    ["B-DNA", "10.0", "35.7", "right", "0.4940", "29.60°"],
    ["Z-DNA", "9.0", "45.6", "left", "0.6277", "38.88°"],
  ],
  [1860, 1260, 1260, 1560, 1560, 1860]
));
kids.push(code([
  "worst covering gap on S²   (unoriented lines, 1024 targets):",
  "  A-DNA single latitude circle ............... 65.87°",
  "  B-DNA single latitude circle ............... 57.86°",
  "  Z-DNA single latitude circle ............... 48.59°",
  "  finite A/B/Z union ......................... 48.59°  (mean 11.10°)",
  "",
  "checks:",
  "  each conformation is a single latitude circle ....... true",
  "  A/B/Z latitudes are distinct ........................ true",
  "  no single conformation is direction-complete ........ true",
  "  finite A/B/Z union is not direction-complete ........ true",
  "  tangent coverage is not Kakeya certification ........ true",
  "  pass ................................................ true",
]));
kids.push(P([ T("Reading. ", {bold:true}), T("Even the union of all three biologically calibrated conformations leaves a 48.6° hole in direction space, confirming the Section 8 obstruction with real parameters. CP-DNA-002 is a calibrated direction diagnostic; it is still not an A/B/Z transition model, and it is emphatically not a Kakeya certificate. ", {}), T("Status: CP-DNA-002 NUMERICS / DIAGNOSTIC (source-calibrated); A/B/Z transition dynamics remain OWED.", {bold:true}) ]));

// 10. harmonic
kids.push(H1("10.  Harmonic attraction toward zero addresses"));
kids.push(P("The proposed harmonic RH field is an engineered potential. For a finite registered set of ordinates Γ_K = {γ_1, …, γ_K}:"));
kids.push(code([
  "U_RH(σ,t)  =  λ_perp (σ − ½)²  −  τ · log Σ_{k≤K} exp( −(t − γ_k)² / τ ) ,",
  "",
  "gradient flow   d(σ,t)/du  =  −∇U_RH(σ,t)",
  "  transverse pressure   → Re(s) = ½",
  "  longitudinal pressure → registered ordinates γ_k",
]));
kids.push(callout([
  [ T("Circularity firewall.  ", {bold:true, size:19}), T("If the γ_k are inserted into U_RH, attraction to γ_k is not evidence for RH. The potential is a visualization / control law until the ordinates are derived independently.", {size:19}) ],
], "FBEFE6"));
kids.push(P("The DNA counterpart is a multi-basin conformational energy landscape whose basins are the A/B/Z sheets and whose local address minima come from complementarity:"));
kids.push(code([
  "U_DNA(x; env)  =  U_sheet(H; env)",
  "                 + λ_θ · dist_S¹(θ, θ̂)²",
  "                 + λ_z · ((z − ẑ)/ℓ)²",
  "                 + λ_q · ( 1 − χ_comp(q, bar(q)) ) .",
]));
kids.push(P([ T("Status: PROPOSED DYNAMICAL MODEL · not an RH result.", {bold:true}) ]));

// 11. C_DNA
kids.push(H1("11.  Love-Squared Coherence diagnostic (C_DNA)"));
kids.push(P("For typed addresses x_n and reference addresses x̂_n, define the residual vector, a positive-weighted energy, and a bounded coherence score:"));
kids.push(code([
  "r_n = ( dist_S¹(θ_n,θ̂_n) ,  (z_n−ẑ_n)/ℓ ,  1−χ_comp(q_n,bar(q_n)) ,  d_H(H_n,Ĥ_n) )",
  "",
  "E_DNA = ( Σ_n w_n · r_n^T M r_n ) / ( Σ_n w_n ) ,   w_n > 0 ,  M positive-diagonal",
  "C_DNA = 1 / ( 1 + E_DNA )  ∈  (0, 1] .",
]));
kids.push(P([ T("Here d_H is a declared conformation-state cost; it must not silently equate A/B/Z transitions. C_DNA is a proposed measurement inside the L²_C discipline, not a replacement for canonical Love-Squared Coherence. PeAIce alignment holds each surface to its discipline:", {}) ]));
kids.push(dataTable(
  ["PeAIce surface", "DNA lane", "Discipline"],
  [
    ["direction", "screw phase, axis, handedness", "retain orientation data"],
    ["coherence", "pairing + conformational regularity", "measure residual; do not infer from appearance"],
    ["β correction", "recovery after a typed perturbation", "define only inside a perturbation experiment"],
    ["placement", "(q, H, θ, z)", "do not collapse into overlap"],
    ["grain", "discrete base occurrence", "keep local structure inspectable"],
    ["continuation", "cross-regime state-space description", "do not call it complex analysis"],
    ["reflection", "chirality-parity analogy", "do not identify B-DNA with Z-DNA"],
    ["h < 1", "evaluator non-sovereignty", "never reuse h as a helix/conformation variable"],
  ],
  [2400, 4160, 2800]
));
kids.push(P([ T("Status: PROPOSED / NUMERICS-READY.", {bold:true}) ]));

// 12. Coleman & RH boundary
kids.push(H1("12.  Coleman and RH contact boundary"));
kids.push(P("The corrected DNA lane supplies three pieces of antecedent grammar and withholds the rest:"));
kids.push(code([
  "SUPPLIES",
  "  1. discrete zero-class addresses        { A, T, C, G }",
  "  2. multi-sheeted structural regimes      { A-DNA, B-DNA, Z-DNA }",
  "  3. a chirality / reflection correspondence",
  "",
  "DOES NOT SUPPLY",
  "  prime lengths        log(p^k)",
  "  prime weights        Λ(p^k) · p^(−k/2)",
  "  Riemann–von Mangoldt density   T log T",
  "  an independently derived zero-attractor field",
  "  a self-adjoint prime-carrying operator",
  "  the zeta explicit formula",
  "  a determinant identity realizing Ξ",
]));
kids.push(P([ T("Interpretation of the Coleman Conjecture. ", {bold:true}), T("In this lane it is a mechanism-selection claim: any genuine Kakeya-to-RH equivalence must preserve more than directional abundance. It must transport prime arithmetic into a trace, determinant, or self-adjoint spectral carrier whose zeros arise independently. The DNA lane reaches the placement and structural-symmetry antecedent of the Coleman program — not its prime-carrying or RH-equivalent rung.", {}) ]));
kids.push(P("Promotion ladder — each rung owes an inspectable receipt before the next is attempted:"));
kids.push(code([
  "AK-0  A/T/C/G zero-class typing ......................... FORMAL definition",
  "AK-1  A/B/Z conformational-bundle typing ............... FORMAL definition",
  "AK-2  ideal-helix directional obstruction .............. FORMAL",
  "AK-3  CP-DNA-001 generic pitch receipt ................. NUMERICS",
  "AK-3′ CP-DNA-002 source-calibrated receipt ............. NUMERICS (this report)",
  "AK-4  A/B/Z transition dynamics ........................ OWED",
  "AK-5  variable-axis unit-segment test .................. PROPOSED",
  "AK-6  prime-carrying trace bridge ...................... OPEN",
]));

// 13. Falsifiers
kids.push(H1("13.  Falsifiers and promotion gates"));
kids.push(P("The object stays honest only if it can be broken. Each falsifier below, if triggered, voids a specific promotion."));
kids.push(code([
  "F-DNA-1  Treating A/T/C/G as only four zeros fails the infinite zero-set cardinality.",
  "F-DNA-2  Declaring the finite A/B/Z ideal union direction-complete is falsified by the",
  "         latitude obstruction (Sections 8–9).",
  "F-DNA-3  Presenting tangent coverage as Kakeya containment without unit segments fails",
  "         the object typing.",
  "F-DNA-4  Calling chirality reversal analytic continuation collapses the operation types",
  "         (Section 7).",
  "F-DNA-5  Treating Z-DNA as the literal mirror image of B-DNA is biologically false.",
  "F-DNA-6  Using an attractor potential containing γ_k as evidence that γ_k lie on the",
  "         critical line is circular (Section 10).",
  "F-DNA-7  Promoting a base or conformation to a ζ-zero or prime claim without an explicit",
  "         prime-carrying bridge is publishing-ineligible under II.1.",
]));

// 14. seal
kids.push(H1("14.  Claim registry and seal"));
kids.push(callout([
  "DNA AS ANTECEDENT KAKEYA GEOMETRY ............ STRUCTURAL ANALOGY",
  "A/T/C/G ...................................... PROPOSED NONTRIVIAL-ZERO CLASSES",
  "A/B/Z DNA .................................... PROPOSED CRITICAL-STRIP SHEETS",
  "CONFORMATIONAL BUNDLE ........................ FORMAL DEFINITION",
  "CHIRALITY / FLIP CORRESPONDENCE .............. STRUCTURAL ANALOGY",
  "ANALYTIC-CONTINUATION IDENTIFICATION ......... NOT CLAIMED",
  "IDEAL A/B/Z UNION AS KAKEYA .................. CLOSED-NEGATIVE",
  "HARMONIC ZERO-ATTRACTOR FIELD ................ PROPOSED / CIRCULAR IF ZEROS INSERTED",
  "C_DNA ........................................ PROPOSED DIAGNOSTIC",
  "CP-DNA-001 ................................... NUMERICS (generic)",
  "CP-DNA-002 ................................... NUMERICS (source-calibrated, this report)",
  "A/B/Z TRANSITION DYNAMICS .................... OWED",
  "PRIME-CARRYING TRACE BRIDGE .................. OPEN",
  "RH ........................................... OPEN",
  "COLEMAN CONJECTURE ........................... OPEN",
  "h < 1 ........................................ ACTIVE",
].map(l=>[T(l,{font:"Consolas",size:16})])));

// Appendix A
kids.push(new Paragraph({ children:[ new PageBreak() ] }));
kids.push(H1("Appendix A.  Calibrated parameters and sources"));
kids.push(P("The Section 3 parameter table is taken from the standard fiber/crystal comparison. Rotation, rise, inclination, glycosyl angle, sugar pucker, and diameter follow Dickerson (1992); the A/B form assignment and dehydration behavior follow Franklin (1953). Conformation-specific structures are anchored by the crystallographic reports below."));
kids.push(bullet("Watson, J. D., Crick, F. H. C. (1953). Molecular Structure of Nucleic Acids. Nature 171, 737–738. doi:10.1038/171737a0."));
kids.push(bullet("Franklin, R. E. (1953). The Structure of Sodium Thymonucleate Fibres I. Acta Crystallographica 6, 673–677. doi:10.1107/s0365110x53001939."));
kids.push(bullet("Drew, H. R. et al. B-DNA dodecamer. PDB 1BNA. doi:10.2210/pdb1BNA/pdb."));
kids.push(bullet("Conner, B. N. et al. (1982). Right-handed A-DNA. Nature 295, 294–299. doi:10.1038/295294a0."));
kids.push(bullet("Wang, A. H.-J. et al. (1979). Left-handed Z-DNA. Nature 282, 680–686. doi:10.1038/282680a0."));
kids.push(bullet("Saenger, W., Hunter, W. N., Kennard, O. (1986). A/B/Z hydration energetics. Nature 324, 385–388. doi:10.1038/324385a0."));
kids.push(bullet("Dickerson, R. E. (1992). DNA Structure. Methods in Enzymology 211, 67–111. doi:10.1016/0076-6879(92)11007-6."));
kids.push(bullet("Guth, L., Wang, H., Zahl, J. (2026). A streamlined proof of the Kakeya set conjecture in ℝ³. arXiv:2601.14411."));

// Appendix B
kids.push(H1("Appendix B.  CP-DNA-002 probe listing"));
kids.push(P("Deterministic, standard-library-only. Running it reproduces the Section 9 receipt exactly."));
const probeSrc = fs.readFileSync(PROBE_PATH, 'utf8').split('\n');
kids.push(code(probeSrc.map(l => l.replace(/\t/g,'    '))));

// Appendix C
kids.push(H1("Appendix C.  Notation"));
kids.push(dataTable(
  ["Symbol", "Meaning"],
  [
    ["Q, H", "nucleobase alphabet {A,T,C,G}; conformational alphabet {A_h,B_h,Z_h}"],
    ["χ(H)", "handedness sign of a conformation: +1 right-handed, −1 left-handed"],
    ["x_n = (q_n,H_n,θ_n,z_n)", "a typed base occurrence: identity, sheet, phase, axial placement"],
    ["C_DNA^strip", "disjoint conformational bundle: disjoint union over H of C_H"],
    ["F_n", "compatibility residual; F_n = 0 is a relational closure event"],
    ["ξ(s), ζ(s)", "completed and ordinary Riemann zeta functions"],
    ["J(s) = 1 − s̄", "the flip; antiholomorphic involution fixing the critical line Re(s)=½"],
    ["J_χ : χ ↦ −χ", "chirality-parity map on conformations"],
    ["U_RH , U_DNA", "proposed harmonic RH field; proposed DNA conformational landscape"],
    ["E_DNA , C_DNA", "coherence energy and bounded coherence score"],
    ["h", "evaluator non-sovereignty parameter; the rule h < 1 (never a helix variable)"],
  ],
  [2700, 6660]
));

// Sources
kids.push(H1("Sources"));
kids.push(P([ T("Structural comparison table and A/B/Z assignment: ", {}), T("en.wikipedia.org/wiki/A-DNA", {font:"Consolas", size:18}), T(" (after Dickerson 1992; Franklin 1953). Program context: ", {}), T("peaice.org/eev3", {font:"Consolas", size:18}), T(", ", {}), T("peaice.org/ddatl", {font:"Consolas", size:18}), T(", KakeyaLogic repository ", {}), T("github.com/Manny536/kakeyalogic", {font:"Consolas", size:18}), T(" (PR #3), and ", {}), T("lovelabslca.com", {font:"Consolas", size:18}), T(". Primary structural literature as listed in Appendix A.", {}) ]));
kids.push(spacer());
kids.push(P([ T("Publication status. ", {bold:true}), T("Structural analogy with formal submodels and diagnostic numerics. DNA is not identified with a Kakeya set, a zeta-zero carrier, a prime generator, or a proof of RH. Coleman Conjecture: OPEN. RH: OPEN. h < 1.", {italics:true}) ]));

// ---------- assemble ----------
const doc = new Document({
  creator: "PeAIce Research Program",
  title: "DNA as an Antecedent Kakeya Geometry — Deepened Research Object",
  description: "PEAICE-KAKEYALOGIC-DNA-AK-001",
  styles: {
    default: {
      document: { run: { font: "Calibri", size: 22, color: "222222" } },
    },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn:"Normal", next:"Normal", quickFormat:true,
        run: { size: 30, bold: true, color: NAVY, font:"Calibri" },
        paragraph: { spacing: { before: 320, after: 140 }, keepNext: true,
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "C9D2DC", space: 3 } } } },
      { id: "Heading2", name: "Heading 2", basedOn:"Normal", next:"Normal", quickFormat:true,
        run: { size: 24, bold: true, color: BLUE, font:"Calibri" },
        paragraph: { spacing: { before: 220, after: 90 }, keepNext: true } },
    ],
  },
  numbering: {
    config: [ { reference: "bullets", levels: [
      { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 460, hanging: 260 } } } } ] } ],
  },
  sections: [{
    properties: { page: {
      size: { width: 12240, height: 15840 },
      margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
    } },
    headers: { default: new Header({ children: [ new Paragraph({
      alignment: AlignmentType.RIGHT, spacing:{after:0},
      children:[ T("PEAICE-KAKEYALOGIC-DNA-AK-001", { size: 15, color: "9AA6B2", font:"Consolas" }) ] }) ] }) },
    footers: { default: new Footer({ children: [ new Paragraph({
      alignment: AlignmentType.CENTER, spacing:{before:0},
      children:[ T("DNA as an Antecedent Kakeya Geometry  ·  h < 1  ·  RH OPEN  ·  page ", { size:16, color:"9AA6B2" }),
                 new TextRun({ children:[ PageNumber.CURRENT ], size:16, color:"9AA6B2" }) ] }) ] }) },
    children: kids,
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(OUTPUT_PATH, buf);
  console.log('WROTE', OUTPUT_PATH, 'bytes:', buf.length);
});
