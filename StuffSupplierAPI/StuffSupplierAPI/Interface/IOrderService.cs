using StuffSupplierAPI.Model;

namespace StuffSupplierAPI.Interface
{
    public interface IOrderService
    {
        Task<IEnumerable<Order>> GetOrders();
        Task<Order> GetOrder(int id);
        Task<Order> AddOrder(Order newOrder);
        
    }
}
