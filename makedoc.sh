#!/bin/sh
#HTML version
pandoc -s --toc --highlight-style pygments -c style.css -N -o atelier-es6.html \
  00-intro/README.md \
	01-models/01-01-THEORIE.md \
	01-models/01-02-PRATIQUE.md \
	01-models/corrections/corrections.md \
	02-collections/02-01-THEORIE.md \
	02-collections/02-02-PRATIQUE.md \
	02-collections/corrections/corrections.md \
	03-observables/03-01-THEORIE.md \
	03-observables/03-02-PRATIQUE.md \
	03-observables/corrections/corrections.md \
	04-views/04-01-THEORIE.md \
	04-views/04-02-PRATIQUE.md \
	04-views/corrections/corrections.md \
	05-sync/05-01-THEORIE.md \
	05-sync/05-02-PRATIQUE.md \
	05-sync/corrections/corrections.md \
	06-router/06-01-THEORIE.md \
	06-router/06-02-PRATIQUE.md \
	06-router/corrections/corrections.md

#PDF version
pandoc -s --toc --latex-engine=xelatex --template=latex.template.tex -N \
	--variable=version:"000 | Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License." \
	--variable=monofont:Consolas \
	--variable=mainfont:Georgia \
	--variable fontsize=12pt \
	--variable=sansfont:Georgia \
	--variable=paper:a4paper \
	--variable=hmargin:2cm \
	--variable=vmargin:2cm \
	--variable=geometry:portrait \
	--variable=nohyphenation:true \
	--variable=author-meta:"Philippe Charrière | @k33g_org" \
	--variable=title-meta$:"ECMAScript 6" \
	-o atelier-es6.pdf \
  00-intro/README.md \
	01-models/01-01-THEORIE.md \
	01-models/01-02-PRATIQUE.md \
	01-models/corrections/corrections.md \
	02-collections/02-01-THEORIE.md \
	02-collections/02-02-PRATIQUE.md \
	02-collections/corrections/corrections.md \
	03-observables/03-01-THEORIE.md \
	03-observables/03-02-PRATIQUE.md \
	03-observables/corrections/corrections.md \
	04-views/04-01-THEORIE.md \
	04-views/04-02-PRATIQUE.md \
	04-views/corrections/corrections.md \
	05-sync/05-01-THEORIE.md \
	05-sync/05-02-PRATIQUE.md \
	05-sync/corrections/corrections.md \
	06-router/06-01-THEORIE.md \
	06-router/06-02-PRATIQUE.md \
	06-router/corrections/corrections.md

pandoc -s --toc --highlight-style pygments -c style.css -N -o atelier-es6.docx \
  00-intro/README.md \
	01-models/01-01-THEORIE.md \
	01-models/01-02-PRATIQUE.md \
	01-models/corrections/corrections.md \
	02-collections/02-01-THEORIE.md \
	02-collections/02-02-PRATIQUE.md \
	02-collections/corrections/corrections.md \
	03-observables/03-01-THEORIE.md \
	03-observables/03-02-PRATIQUE.md \
	03-observables/corrections/corrections.md \
	04-views/04-01-THEORIE.md \
	04-views/04-02-PRATIQUE.md \
	04-views/corrections/corrections.md \
	05-sync/05-01-THEORIE.md \
	05-sync/05-02-PRATIQUE.md \
	05-sync/corrections/corrections.md \
	06-router/06-01-THEORIE.md \
	06-router/06-02-PRATIQUE.md \
	06-router/corrections/corrections.md
