import {
  IdChanged as IdChangedEvent,
  NameChanged as NameChangedEvent,
  Transfer as TransferEvent
} from "../generated/SimpleWallet/SimpleWallet"
import { IdChanged, NameChanged, Transfer } from "../generated/schema"

export function handleIdChanged(event: IdChangedEvent): void {
  let entity = new IdChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.setter = event.params.setter
  entity.oldId = event.params.oldId
  entity.newId = event.params.newId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNameChanged(event: NameChangedEvent): void {
  let entity = new NameChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.setter = event.params.setter
  entity.oldName = event.params.oldName
  entity.newName = event.params.newName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
