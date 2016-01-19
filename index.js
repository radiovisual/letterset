'use strict';
var hex = require('ascii-hex');
var decimal = require('ascii-decimal');

function LetterSet() {
	if (!(this instanceof LetterSet)) {
		return new LetterSet();
	}
	this.letters = {
		A: {name: 'Uppercase A', html: 'A'},
		a: {name: 'Lowercase a', html: 'a'},
		B: {name: 'Uppercase B', html: 'B'},
		b: {name: 'Lowercase b', html: 'b'},
		C: {name: 'Uppercase C', html: 'C'},
		c: {name: 'Lowercase c', html: 'c'},
		D: {name: 'Uppercase D', html: 'D'},
		d: {name: 'Lowercase d', html: 'd'},
		E: {name: 'Uppercase E', html: 'E'},
		e: {name: 'Lowercase e', html: 'e'},
		F: {name: 'Uppercase F', html: 'F'},
		f: {name: 'Lowercase f', html: 'f'},
		G: {name: 'Uppercase G', html: 'G'},
		g: {name: 'Lowercase g', html: 'g'},
		H: {name: 'Uppercase H', html: 'H'},
		h: {name: 'Lowercase h', html: 'h'},
		I: {name: 'Uppercase I', html: 'I'},
		i: {name: 'Lowercase i', html: 'i'},
		J: {name: 'Uppercase J', html: 'J'},
		j: {name: 'Lowercase j', html: 'j'},
		K: {name: 'Uppercase K', html: 'K'},
		k: {name: 'Lowercase k', html: 'k'},
		L: {name: 'Uppercase L', html: 'L'},
		l: {name: 'Lowercase l', html: 'l'},
		M: {name: 'Uppercase M', html: 'M'},
		m: {name: 'Lowercase m', html: 'm'},
		N: {name: 'Uppercase N', html: 'N'},
		n: {name: 'Lowercase n', html: 'n'},
		O: {name: 'Uppercase O', html: 'O'},
		o: {name: 'Lowercase o', html: 'o'},
		P: {name: 'Uppercase P', html: 'P'},
		p: {name: 'Lowercase p', html: 'p'},
		Q: {name: 'Uppercase Q', html: 'Q'},
		q: {name: 'Lowercase q', html: 'q'},
		R: {name: 'Uppercase R', html: 'R'},
		r: {name: 'Lowercase r', html: 'r'},
		S: {name: 'Uppercase S', html: 'S'},
		s: {name: 'Lowercase s', html: 's'},
		T: {name: 'Uppercase T', html: 'T'},
		t: {name: 'Lowercase t', html: 't'},
		U: {name: 'Uppercase U', html: 'U'},
		u: {name: 'Lowercase u', html: 'u'},
		V: {name: 'Uppercase V', html: 'V'},
		v: {name: 'Lowercase v', html: 'v'},
		W: {name: 'Uppercase W', html: 'W'},
		w: {name: 'Lowercase w', html: 'w'},
		X: {name: 'Uppercase X', html: 'X'},
		x: {name: 'Lowercase x', html: 'x'},
		Y: {name: 'Uppercase Y', html: 'Y'},
		y: {name: 'Lowercase y', html: 'y'},
		Z: {name: 'Uppercase Z', html: 'Z'},
		z: {name: 'Lowercase z', html: 'z'},
		İ: {name: 'Capital I-dotted', html: '&Idot;'},
		ı: {name: 'Lowercase i-dotless', html: '&imath;'},
		Ö: {name: 'Latin capital letter O with diaeresis/umlaut', html: '&Ouml;'},
		ö: {name: 'Latin capital letter O with diaeresis/umlaut', html: '&ouml;'},
		Ü: {name: 'Latin capital letter U with diaeresis/umlaut', html: '&Uuml;'},
		ü: {name: 'Lowercase u-umlaut', html: '&uuml;'},
		Ç: {name: 'Latin capital letter C with cedilla', html: '&Ccedil;'},
		ç: {name: 'Latin small letter c with cedilla', html: '&ccedil;'},
		Ğ: {name: 'Capital G-breve', html: '&Gbreve;'},
		ğ: {name: 'Lowercase g-breve', html: '&gbreve;'},
		Ş: {name: 'Capital letter S with cedilla', html: '&Scedil;'},
		ş: {name: 'Lowercase letter s with cedilla', html: '&scedil;'},
		Á: {name: 'Latin capital letter A with acute', html: '&Aacute;'},
		á: {name: 'Latin small letter a with acute', html: '&aacute;'},
		É: {name: 'Latin capital letter E with acute', html: '&Eacute;'},
		é: {name: 'Latin small letter e with acute', html: '&eacute;'},
		Í: {name: 'Latin capital letter I with acute', html: '&Iacute;'},
		í: {name: 'Latin small letter i with acute', html: '&iacute;'},
		Ñ: {name: 'Latin capital letter N with tilde', html: '&Ntilde;'},
		ñ: {name: 'Latin small letter n with tilde', html: '&ntilde;'},
		Ó: {name: 'Latin capital letter O with acute', html: '&Oacute;'},
		ó: {name: 'Latin small letter o with acute', html: '&oacute;'},
		Ú: {name: 'Latin capital letter U with acute', html: '&Uacute;'},
		ú: {name: 'Latin small letter u with acute', html: '&uacute;'},
		А: {name: 'CYRILLIC CAPITAL LETTER A', html: '&Acy;'},
		а: {name: 'CYRILLIC SMALL LETTER A', html: '&acy;'},
		Б: {name: 'CYRILLIC CAPITAL LETTER BE', html: '&Bcy;'},
		б: {name: 'CYRILLIC SMALL LETTER BE', html: '&bcy;'},
		В: {name: 'CYRILLIC CAPITAL LETTER VE', html: '&Vcy;'},
		в: {name: 'CYRILLIC SMALL LETTER VE', html: '&vcy;'},
		Г: {name: 'CYRILLIC CAPITAL LETTER GHE', html: '&Gcy;'},
		г: {name: 'CYRILLIC SMALL LETTER GHE', html: '&gcy;'},
		Д: {name: 'CYRILLIC CAPITAL LETTER DE', html: '&Dcy;'},
		д: {name: 'CYRILLIC SMALL LETTER DE', html: '&dcy;'},
		Е: {name: 'CYRILLIC CAPITAL LETTER IE', html: '&IEcy;'},
		е: {name: 'CYRILLIC SMALL LETTER IE', html: '&iecy;'},
		Ж: {name: 'CYRILLIC CAPITAL LETTER ZHE', html: '&ZHcy;'},
		ж: {name: 'CYRILLIC SMALL LETTER ZHE', html: '&zhcy;'},
		З: {name: 'CYRILLIC CAPITAL LETTER ZE', html: '&Zcy;'},
		з: {name: 'CYRILLIC SMALL LETTER ZE', html: '&zcy;'},
		И: {name: 'CYRILLIC CAPITAL LETTER I', html: '&Icy;'},
		и: {name: 'CYRILLIC SMALL LETTER I', html: '&icy;'},
		Й: {name: 'CYRILLIC CAPITAL LETTER SHORT I', html: '&Jcy;'},
		й: {name: 'CYRILLIC SMALL LETTER SHORT I', html: '&jcy;'},
		К: {name: 'CYRILLIC CAPITAL LETTER KA', html: '&Kcy;'},
		к: {name: 'CYRILLIC SMALL LETTER KA', html: '&kcy;'},
		Л: {name: 'CYRILLIC CAPITAL LETTER EL', html: '&Lcy;'},
		л: {name: 'CYRILLIC SMALL LETTER EL', html: '&lcy;'},
		М: {name: 'CYRILLIC CAPITAL LETTER EM', html: '&Mcy;'},
		м: {name: 'CYRILLIC SMALL LETTER EM', html: '&mcy;'},
		Н: {name: 'CYRILLIC CAPITAL LETTER EN', html: '&Ncy;'},
		н: {name: 'CYRILLIC SMALL LETTER EN', html: '&ncy;'},
		О: {name: 'CYRILLIC CAPITAL LETTER O', html: '&Ocy;'},
		о: {name: 'CYRILLIC SMALL LETTER O', html: '&ocy;'},
		П: {name: 'CYRILLIC CAPITAL LETTER PE', html: '&Pcy;'},
		п: {name: 'CYRILLIC SMALL LETTER PE', html: '&pcy;'},
		Р: {name: 'CYRILLIC CAPITAL LETTER ER', html: '&Rcy;'},
		р: {name: 'CYRILLIC SMALL LETTER ER', html: '&rcy;'},
		С: {name: 'CYRILLIC CAPITAL LETTER ES', html: '&Scy;'},
		с: {name: 'CYRILLIC SMALL LETTER ES', html: '&scy;'},
		Т: {name: 'CYRILLIC CAPITAL LETTER TE', html: '&Tcy;'},
		т: {name: 'CYRILLIC SMALL LETTER TE', html: '&tcy;'},
		У: {name: 'CYRILLIC CAPITAL LETTER U', html: '&Ucy;'},
		у: {name: 'CYRILLIC SMALL LETTER U', html: '&ucy;'},
		Ф: {name: 'CYRILLIC CAPITAL LETTER EF', html: '&Fcy;'},
		ф: {name: 'CYRILLIC SMALL LETTER EF', html: '&fcy;'},
		Х: {name: 'CYRILLIC CAPITAL LETTER HA', html: '&KHcy;'},
		х: {name: 'CYRILLIC SMALL LETTER HA', html: '&khcy;'},
		Ц: {name: 'CYRILLIC CAPITAL LETTER TSE', html: '&TScy;'},
		ц: {name: 'CYRILLIC SMALL LETTER TSE', html: '&tscy;'},
		Ч: {name: 'CYRILLIC CAPITAL LETTER CHE', html: '&CHcy;'},
		ч: {name: 'CYRILLIC SMALL LETTER CHE', html: '&chcy;'},
		Ш: {name: 'CYRILLIC CAPITAL LETTER SHA', html: '&SHcy;'},
		ш: {name: 'CYRILLIC SMALL LETTER SHA', html: '&shcy;'},
		Щ: {name: 'CYRILLIC CAPITAL LETTER SHCHA', html: '&SHCHcy;'},
		щ: {name: 'CYRILLIC SMALL LETTER SHCHA', html: '&shchcy;'},
		Ъ: {name: 'CYRILLIC CAPITAL LETTER HARD SIGN', html: '&HARDcy;'},
		ъ: {name: 'CYRILLIC SMALL LETTER HARD SIGN', html: '&hardcy;'},
		Ы: {name: 'CYRILLIC CAPITAL LETTER YERU', html: '&Ycy;'},
		ы: {name: 'CYRILLIC SMALL LETTER YERU', html: '&ycy;'},
		Ь: {name: 'CYRILLIC CAPITAL LETTER SOFT SIGN', html: '&SOFTcy;'},
		ь: {name: 'CYRILLIC SMALL LETTER SOFT SIGN', html: '&softcy;'},
		Э: {name: 'CYRILLIC CAPITAL LETTER E', html: '&Ecy;'},
		э: {name: 'CYRILLIC SMALL LETTER E', html: '&ecy;'},
		Ю: {name: 'CYRILLIC CAPITAL LETTER YU', html: '&YUcy;'},
		ю: {name: 'CYRILLIC SMALL LETTER YU', html: '&yucy;'},
		Я: {name: 'CYRILLIC CAPITAL LETTER YA', html: '&YAcy;'},
		я: {name: 'CYRILLIC SMALL LETTER YA', html: '&yacy;'},
		Ă: {name: 'Capital A-breve', html: '&Abreve;'},
		ă: {name: 'Lowercase a-breve', html: '&abreve;'},
		Â: {name: 'Latin capital letter A with circumflex', html: '&Acirc;'},
		â: {name: 'Latin small letter a with circumflex', html: '&acirc;'},
		Î: {name: 'Latin capital letter I with circumflex', html: '&Icirc;'},
		î: {name: 'Latin small letter i with circumflex', html: '&icirc;'},
		Ș: {name: 'Capital S-comma', html: '&#536;'},
		ș: {name: 'Lowercase s-comma', html: '&#537;'},
		Ț: {name: 'Capital T-comma', html: '&#538;'},
		ț: {name: 'Lowercase t-comma', html: '&#539;'},
		Ţ: {name: 'Capital T-cedille', html: '&Tcedil;'},
		ţ: {name: 'Lowercase t-cedille', html: '&tcedil;'},
		Ą: {name: 'Capital A-cedille', html: '&Aogon;'},
		ą: {name: 'Lowercase a-cedille', html: '&aogon;'},
		Ę: {name: 'Capital E-cedille', html: '&Eogon;'},
		ę: {name: 'Lowercase e-cedille', html: '&eogon;'},
		Ć: {name: 'Capital C-acute', html: '&Cacute;'},
		ć: {name: 'Lowercase c-acute', html: '&cacute;'},
		Ł: {name: 'Capital L-bar', html: '&Lstrok;'},
		ł: {name: 'Lowercase l-bar', html: '&lstrok;'},
		Ń: {name: 'Capital N-acute', html: '&Nacute;'},
		ń: {name: 'Lowercase n-acute', html: '&nacute;'},
		Ś: {name: 'Capital S-acute', html: '&Sacute;'},
		ś: {name: 'Lowercase s-acute', html: '&sacute;'},
		Ź: {name: 'Capital Z-acute', html: '&Zacute;'},
		ź: {name: 'Lowercase z-acute', html: '&zacute;'},
		Ż: {name: 'Capital Z-dot', html: '&Zdot;'},
		ż: {name: 'Lowercase z-dot', html: '&zdot;'},
		À: {name: 'Latin capital letter A with grave', html: '&Agrave;'},
		à: {name: 'Latin small letter a with grave', html: '&agrave;'},
		Ã: {name: 'Latin capital letter A with tilde', html: '&Atilde;'},
		ã: {name: 'Latin small letter a with tilde', html: '&atilde;'},
		Ä: {name: 'Latin capital letter A with diaeresis', html: '&Auml;'},
		ä: {name: 'Latin small letter a with diaeresie', html: '&auml;'},
		Å: {name: 'Latin capital letter A with ring above', html: '&angst;'},
		å: {name: 'Latin small letter a with ring above', html: '&aring;'},
		Æ: {name: 'Capital AE Ligature', html: '&AElig;'},
		æ: {name: 'Lowercase AE Ligature', html: '&aelig;'},
		È: {name: 'Latin capital letter E with grave', html: '&Egrave;'},
		è: {name: 'Latin small letter e with grave', html: '&egrave;'},
		Ê: {name: 'Latin capital letter E with circumflex', html: '&Ecirc;'},
		ê: {name: 'Latin small letter e with circumflex', html: '&ecirc;'},
		Ë: {name: 'Latin capital letter E with diaeresis/umlaut', html: '&Euml;'},
		ë: {name: 'Latin small letter e with diaeresis/umlaut', html: '&euml;'},
		ƒ: {name: 'Latin small letter f with hook', html: '&fnof;'},
		Ì: {name: 'Latin capital letter I with grave', html: '&Igrave;'},
		ì: {name: 'Latin small letter i with grave', html: '&igrave;'},
		Ï: {name: 'Latin capital letter I with diaeresis/umlaut', html: '&Iuml;'},
		ï: {name: 'Latin small letter i with diaeresis/umlaut', html: '&iuml;'},
		Ò: {name: 'Latin capital letter O with grave', html: '&Ograve;'},
		ò: {name: 'Latin small letter o with grave', html: '&ograve;'},
		Ô: {name: 'Latin capital letter O with circumflex', html: '&Ocirc;'},
		ô: {name: 'Latin small letter o with circumflex', html: '&ocirc;'},
		Õ: {name: 'Latin capital letter O with tilde', html: '&Otilde;'},
		õ: {name: 'Latin small letter o with tilde', html: '&otilde;'},
		Ø: {name: 'Latin capital letter O with slash', html: '&Oslash;'},
		ø: {name: 'Latin small letter o with slash', html: '&oslash;'},
		Š: {name: 'Latin capital letter S with caron', html: '&Scaron;'},
		š: {name: 'Latin small letter S with caron', html: '&scaron;'},
		ß: {name: 'Latin small letter sharp s - ess-zed; SZ ligature', html: '&szlig;'},
		Ù: {name: 'Latin capital letter U with grave', html: '&Ugrave;'},
		ù: {name: 'Latin small letter u with grave', html: '&ugrave;'},
		Û: {name: 'Latin capital letter U with circumflex', html: '&Ucirc;'},
		û: {name: 'Latin small letter u with circumflex', html: '&ucirc;'},
		Ÿ: {name: 'Latin capital letter Y with diaeresis', html: '&Yuml;'},
		ÿ: {name: 'Latin small letter y with diaeresis', html: '&yuml;'},
		Ý: {name: 'Latin capital letter Y with acute', html: '&Yacute;'},
		ý: {name: 'Latin small letter y with acute', html: '&yacute;'},
		Ž: {name: 'Latin captial letter Z with caron', html: '&Zcaron;'},
		ž: {name: 'Latin small letter z with caron', html: '&zcaron;'},
		Œ: {name: 'Latin capital ligature O', html: '&OElig;'},
		œ: {name: 'Latin small ligature o', html: '&oelig;'},
		Ð: {name: 'Latin capital letter ET', html: '&ETH;'},
		Þ: {name: 'Latin capital letter THOR', html: '&THORN;'},
		ð: {name: 'Latin small letter et', html: '&eth;'},
		þ: {name: 'Latin small letter thor', html: '&thorn;'},
		Ē: {name: 'Capital E-umlaut', html: '&Emacr;'},
		ē: {name: 'Lowercase e-umlaut', html: '&emacr;'},
		Ī: {name: 'Capital I-umlaut', html: '&Imacr;'},
		ī: {name: 'Lowercase i-umlaut', html: '&imacr;'},
		Ō: {name: 'Capital O-umlaut', html: '&Omacr;'},
		ō: {name: 'Lowercase o-umlaut', html: '&omacr;'},
		Ū: {name: 'Capital U-umlaut', html: '&Umacr;'},
		ū: {name: 'Lowercase u-umlaut', html: '&umacr;'},
		Α: {name: 'Capital Alpha', html: '&Alpha;'},
		α: {name: 'Lowercase Alpha', html: '&alpha;'},
		Β: {name: 'Capital Beta', html: '&Beta;'},
		β: {name: 'Lowercase Beta', html: '&beta;'},
		Γ: {name: 'Capital Gamma', html: '&Gamma;'},
		γ: {name: 'Lowercase Gamma', html: '&gamma;'},
		Δ: {name: 'Capital Delta', html: '&Delta;'},
		δ: {name: 'Lowercase Delta', html: '&delta;'},
		Ε: {name: 'Capital Epsilon', html: '&Epsilon;'},
		ε: {name: 'Lowercase Epsilon', html: '&epsi;'},
		Ζ: {name: 'Capital Zeta', html: '&Zeta;'},
		ζ: {name: 'Lowercase Zeta', html: '&zeta;'},
		Η: {name: 'Capital Eta', html: '&Eta;'},
		η: {name: 'Lowercase Eta', html: '&eta;'},
		Θ: {name: 'Capital Theta', html: '&Theta;'},
		θ: {name: 'Lowercase Theta', html: '&theta;'},
		Ι: {name: 'Capital Iota', html: '&Iota;'},
		ι: {name: 'Lowercase Iota', html: '&iota;'},
		Κ: {name: 'Capital Kappa', html: '&Kappa;'},
		κ: {name: 'Lowercase Kappa', html: '&kappa;'},
		Λ: {name: 'Capital Lambda', html: '&Lambda;'},
		λ: {name: 'Lowercase Lambda', html: '&lambda;'},
		Μ: {name: 'Capital M', html: '&Mu;'},
		μ: {name: 'Lowercase M', html: '&mu;'},
		Ν: {name: 'Capital N', html: '&Nu;'},
		ν: {name: 'Lowercase N', html: '&nu;'},
		Ξ: {name: 'Capital X', html: '&Xi;'},
		ξ: {name: 'Lowercase X', html: '&xi;'},
		Ο: {name: 'Capital Omicron', html: '&Omicron;'},
		ο: {name: 'Lowercase Omicron', html: '&omicron;'},
		Π: {name: 'Capital Pi', html: '&Pi;'},
		π: {name: 'Lowercase Pi', html: '&pi;'},
		Ρ: {name: 'Capital Rho', html: '&Rho;'},
		ρ: {name: 'Lowercase Rho', html: '&rho;'},
		Σ: {name: 'Capital Sigma', html: '&Sigma;'},
		σ: {name: 'Lowercase Sigma', html: '&sigma;'},
		ς: {name: 'Lowercase Final Sigma', html: '&sigmaf;'},
		Τ: {name: 'Capital Tau', html: '&Tau;'},
		τ: {name: 'Lowercase Tau', html: '&tau;'},
		Υ: {name: 'Capital Upsilon', html: '&Upsilon;'},
		υ: {name: 'Lowercase Upsilon', html: '&upsi;'},
		Φ: {name: 'Capital Phi', html: '&Phi;'},
		φ: {name: 'Lowercase Phi', html: '&phi;'},
		Χ: {name: 'Capital Chi', html: '&Chi;'},
		χ: {name: 'Lowercase Chi', html: '&chi;'},
		Ψ: {name: 'Capital Psi', html: '&Psi;'},
		ψ: {name: 'Lowercase Psi', html: '&psi;'},
		Ω: {name: 'Capital Omega', html: '&ohm;'},
		ω: {name: 'Lowercase Omega', html: '&omega;'},
		Ě: {name: 'Capital E-hache', html: '&Ecaron;'},
		ě: {name: 'Lowercase e-hache', html: '&ecaron;'},
		Ů: {name: 'Capital U-ring', html: '&Uring;'},
		ů: {name: 'Lowercase u-ring', html: '&uring;'},
		Č: {name: 'Capital C-hache/caron', html: '&Ccaron;'},
		č: {name: 'Lowercase c-hache/caron', html: '&ccaron;'},
		ď: {name: 'd-apostrophe', html: '&dcaron;'},
		ť: {name: 't-apostrophe', html: '&tcaron;'},
		Ĺ: {name: 'Capital L-acute', html: '&Lacute;'},
		ĺ: {name: 'Lowercase l-acute', html: '&lacute;'},
		Ň: {name: 'Capital N-hache/caron', html: '&Ncaron;'},
		ň: {name: 'Lowercase n-hache/caron', html: '&ncaron;'},
		Ŕ: {name: 'Capital R-acute', html: '&Racute;'},
		ŕ: {name: 'Lowercase r-acute', html: '&racute;'},
		Ř: {name: 'Capital R-hache/caron', html: '&Rcaron;'},
		ř: {name: 'Lowercase r-hache/caron', html: '&rcaron;'}
	};
}

LetterSet.prototype.isLetter = function (char) {
	return this.letters.hasOwnProperty(char);
};

LetterSet.prototype.allCharacters = function () {
	return Object.keys(this.letters);
};

LetterSet.prototype.hex = function (char) {
	return hex(char);
};

LetterSet.prototype.decimal = function (char) {
	return decimal(char);
};

LetterSet.prototype.name = function (char) {
	return this.letters[char].name.toUpperCase();
};

module.exports = LetterSet;
