import { expectAssignable, expectNotAssignable } from 'tsd'
import { Token } from '../styled-system-with-only-local-presets/tokens';

// Default preset (not supposed to be here)
expectNotAssignable<Token>("colors.red.100")

// Custom preset
expectAssignable<Token>("colors.test.light");