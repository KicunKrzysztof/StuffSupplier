using StuffSupplierAPI.Model;

namespace StuffSupplierAPI.Interface
{
    public interface IOrderService
    {
        Task<IEnumerable<Order>> GetOrders();
    }
}
