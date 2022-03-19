using StuffSupplierAPI.Interface;
using StuffSupplierAPI.Model;

namespace StuffSupplierAPI.Services
{
    public sealed class OrderService : IOrderService
    {
        private IOrderRepository _orderRepository;

        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public async Task<IEnumerable<Order>> GetOrders()
        {
            var orders = await _orderRepository.GetOrders();
            return orders;
        }
        public async Task<Order> GetOrder(int orderId)
        {
            var order = await _orderRepository.GetOrder(orderId);
            return order;
        }
        public async Task<Order> AddOrder(Order newOrder)
        {
            var order = await _orderRepository.AddOrder(newOrder);
            return order;
        }
    }
}
