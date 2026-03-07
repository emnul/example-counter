// This file is part of midnightntwrk/example-counter.
// Copyright (C) 2025 Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { ShieldedAccessControl, type ShieldedAccessControlPrivateState, ShieldedAccessControlWitnesses } from '@emnul/shielded-access-control';
import type { MidnightProviders } from '@midnight-ntwrk/midnight-js-types';
import type { DeployedContract, FoundContract } from '@midnight-ntwrk/midnight-js-contracts';
import type { ImpureCircuitId } from '@midnight-ntwrk/compact-js';

export type ShieldedAccessControlCircuits = ImpureCircuitId<ShieldedAccessControl.Contract<ShieldedAccessControlPrivateState>>;

export const ShieldedAccessControlPrivateStateId = 'shieldedAccessControlPrivateState';

export type ShieldedAccessControlProviders = MidnightProviders<ShieldedAccessControlCircuits, typeof ShieldedAccessControlPrivateStateId, ShieldedAccessControlPrivateState>;

export type ShieldedAccessControlContract = ShieldedAccessControl.Contract<ShieldedAccessControlPrivateState>;

export type DeployedShieldedAccessControlContract = DeployedContract<ShieldedAccessControlContract> | FoundContract<ShieldedAccessControlContract>;


