import { expectAssignable, expectNotAssignable } from 'tsd'
import { Token } from '../styled-system-with-two-presets/tokens';

// Default presets (not supposed to be here)
expectNotAssignable<Token>("colors.red.100")

// First custom preset
expectAssignable<Token>("colors.test.light");

// Second custom preset
expectAssignable<Token>("colors.test.dark");
expectAssignable<Token>("sizes.3xs");
