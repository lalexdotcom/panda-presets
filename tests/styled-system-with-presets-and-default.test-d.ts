import { expectAssignable } from 'tsd'
import { Token } from '../styled-system-with-presets-and-default/tokens';

// Defaut preset
expectAssignable<Token>("colors.red.100");

// Custom preset
expectAssignable<Token>("colors.test.light");