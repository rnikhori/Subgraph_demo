import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { IdChanged } from "../generated/schema"
import { IdChanged as IdChangedEvent } from "../generated/SimpleWallet/SimpleWallet"
import { handleIdChanged } from "../src/simple-wallet"
import { createIdChangedEvent } from "./simple-wallet-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let setter = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let oldId = BigInt.fromI32(234)
    let newId = BigInt.fromI32(234)
    let newIdChangedEvent = createIdChangedEvent(setter, oldId, newId)
    handleIdChanged(newIdChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("IdChanged created and stored", () => {
    assert.entityCount("IdChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "IdChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "setter",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "IdChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "oldId",
      "234"
    )
    assert.fieldEquals(
      "IdChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
