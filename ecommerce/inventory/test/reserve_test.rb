require_relative "test_helper"

module Inventory
  class ReserveTest < Test
    def test_stock_gets_reserved_when_available
      product_id = SecureRandom.uuid
      order_id = SecureRandom.uuid
      arrange(supply(product_id, 1))

      assert_events(
        inventory_entry_stream(product_id),
        StockReserved.new(data: { order_id: order_id, product_id: product_id, quantity: 1 }),
        AvailabilityChanged.new(data: { product_id: product_id, available: 0 })
      ) do
        act(reserve(order_id, product_id, 1))
      end
    end

    def test_stock_gets_reserved_when_stock_level_undefined
      product_id = SecureRandom.uuid
      order_id = SecureRandom.uuid

      assert_events(
        inventory_entry_stream(product_id),
        StockReserved.new(data: { order_id: order_id, product_id: product_id, quantity: 1 })
      ) do
        act(reserve(order_id, product_id, 1))
      end
    end

    def test_stock_does_not_get_reserved_when_unavailable
      product_id = SecureRandom.uuid
      order_id = SecureRandom.uuid

      arrange(supply(product_id, 1))
      assert_events(
        inventory_entry_stream(product_id),
        StockUnavailable.new(data: { order_id: order_id, product_id: product_id, quantity: 2 })
      ) do
        act(reserve(order_id, product_id, 2))
      end
    end
  end
end
