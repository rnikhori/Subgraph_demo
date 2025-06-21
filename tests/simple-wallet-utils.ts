import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  IdChanged,
  NameChanged,
  Transfer
} from "../generated/SimpleWallet/SimpleWallet"

export function createIdChangedEvent(
  setter: Address,
  oldId: BigInt,
  newId: BigInt
): IdChanged {
  let idChangedEvent = changetype<IdChanged>(newMockEvent())

  idChangedEvent.parameters = new Array()

  idChangedEvent.parameters.push(
    new ethereum.EventParam("setter", ethereum.Value.fromAddress(setter))
  )
  idChangedEvent.parameters.push(
    new ethereum.EventParam("oldId", ethereum.Value.fromUnsignedBigInt(oldId))
  )
  idChangedEvent.parameters.push(
    new ethereum.EventParam("newId", ethereum.Value.fromUnsignedBigInt(newId))
  )

  return idChangedEvent
}

export function createNameChangedEvent(
  setter: Address,
  oldName: string,
  newName: string
): NameChanged {
  let nameChangedEvent = changetype<NameChanged>(newMockEvent())

  nameChangedEvent.parameters = new Array()

  nameChangedEvent.parameters.push(
    new ethereum.EventParam("setter", ethereum.Value.fromAddress(setter))
  )
  nameChangedEvent.parameters.push(
    new ethereum.EventParam("oldName", ethereum.Value.fromString(oldName))
  )
  nameChangedEvent.parameters.push(
    new ethereum.EventParam("newName", ethereum.Value.fromString(newName))
  )

  return nameChangedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferEvent
}
