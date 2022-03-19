using Microsoft.EntityFrameworkCore;
using StuffSupplierAPI.Data;
using StuffSupplierAPI.Interface;
using StuffSupplierAPI.Model;

namespace StuffSupplierAPI.Repositories
{
    public sealed class OrderRepository : IOrderRepository
    {
        private readonly DataContext _context;

        public OrderRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Order>> GetOrders()
        {
            var orders = await _context.Orders.Include(o => o.OrderItems).Include(o => o.Address).ToListAsync();
            return orders;
        }

        public async Task<Order> GetOrder(int id)
        {
            var order = await _context.Orders.FirstOrDefaultAsync(o => o.Id == id);
            return order;
        }

        public async Task<Order> AddOrder(Order order)
        {
            var addedOrder = _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            return await GetOrder(addedOrder.Entity.Id);
        }
    }
}
