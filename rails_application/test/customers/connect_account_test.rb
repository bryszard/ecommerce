require "test_helper"

module Customers
  class UpdatePaidOrdersSummaryTest < InMemoryTestCase
    cover "Customers"

    def setup
      super
      Customer.destroy_all
    end

    def test_update_orders_cummary
      customer_id = SecureRandom.uuid
      product_id = SecureRandom.uuid
      account_id = SecureRandom.uuid

      register_customer(customer_id)
      run_command(
        Authentication::ConnectAccountToClient.new(account_id: account_id, client_id: customer_id)
      )

      customer = Customer.find(customer_id)
      assert_equal account_id, customer.account_id
    end

    private

    def register_customer(customer_id)
      run_command(Crm::RegisterCustomer.new(customer_id: customer_id, name: "John Doe"))
    end

    def event_store
      Rails.configuration.event_store
    end
  end
end
