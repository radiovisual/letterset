import test from 'ava';
import letterset from './index';

test('should find letters', t => {
	t.is(letterset.isLetter('a'), true);
	t.is(letterset.isLetter('Б'), true);
	t.is(letterset.isLetter('ş'), true);
	t.is(letterset.isLetter('Ь'), true);
	t.is(letterset.isLetter('ƒ'), true);
});

test('should return all characters', t => {
	const arr = letterset.allCharacters();
	t.is(Array.isArray(arr), true);
	t.true(arr.length > 0);
});

test('should get hex', t => {
	t.is(letterset.hex('A'), 0x41);
});

test('should get decimal', t => {
	t.is(letterset.decimal('A'), 65);
});

test('should get name', t => {
	t.is(letterset.name('Œ'), 'LATIN CAPITAL LIGATURE O');
});
