import { expectAssignable } from 'tsd'
import { Token } from '../styled-system-with-theme/tokens';

// Default theme
expectAssignable<Token>("colors.red.100"); // From default presets
// Extended theme
expectAssignable<Token>("colors.test.light"); // From theme