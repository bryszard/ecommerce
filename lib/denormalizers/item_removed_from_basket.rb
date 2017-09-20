module Denormalizers
  class ItemRemovedFromBasket < ApplicationJob
    queue_as :default

    def perform(*args)
      call(YAML.load(args.first))
    end

    private
    def call(event)
      item = find(event.data[:order_id], event.data[:product_id])
      item.quantity -= 1
      item.quantity > 0 ? item.save! : item.destroy!
    end

    private
    def find(order_uid, product_id)
      ::OrderLine.where({order_uid: order_uid, product_id: product_id}).first
    end
  end
end
