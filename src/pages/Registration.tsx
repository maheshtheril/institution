import { useState } from 'react'
import { UserPlus, CreditCard, Bookmark, User, MapPin } from 'lucide-react'

const SCHOOLS = [
  { id: 'S1', name: 'Natyalaya School Bangalore (Main)', fee: 900 },
  { id: 'S2', name: 'Electronic City Branch', fee: 800 },
  { id: 'S3', name: 'Sarjapur Branch', fee: 700 },
]

const Registration = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    schoolId: '',
    joiningDate: '',
    parentsName: '',
    parentsOccupation: '',
    residentialAddress: '',
    permanentAddress: '',
    sameAsResidential: false,
    registrationFee: 500,
  });

  const selectedSchool = SCHOOLS.find(s => s.id === formData.schoolId);

  return (
    <div className="animate-in" style={{ paddingBottom: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
        <div style={{ 
          width: '48px', height: '48px', 
          background: 'var(--primary-glow)', 
          borderRadius: '12px', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--primary)'
        }}>
          <UserPlus size={24} />
        </div>
        <div>
          <h2 style={{ fontSize: '28px' }}>Student Registration</h2>
          <p style={{ color: 'var(--text-muted)' }}>Enroll a new talent at Aadhyashree Natyalaya</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px', maxWidth: '1000px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 500px' }}>
          <div className="glass-card" style={{ padding: 'window.innerWidth <= 768 ? "20px" : "32px' }}>
            {/* Step 1: Basic Information */}
            <div className="stats-grid" style={{ gap: '24px' }}>
              <div style={{ gridColumn: 'window.innerWidth > 640 ? "span 2" : "span 1"', marginBottom: '8px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: 'var(--primary)' }}>
                  <User size={18} /> Basic Information
                </h3>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '14px', marginBottom: '8px', display: 'block' }}>Student Name</label>
                <input 
                  type="text" 
                  className="premium-input" 
                  placeholder="Full Name" 
                  value={formData.studentName}
                  onChange={e => setFormData({...formData, studentName: e.target.value})}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '14px', marginBottom: '8px', display: 'block' }}>Class/Level</label>
                <input 
                  type="text" 
                  className="premium-input" 
                  placeholder="e.g. Junior, Advanced" 
                  value={formData.class}
                  onChange={e => setFormData({...formData, class: e.target.value})}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '14px', marginBottom: '8px', display: 'block' }}>School/Branch</label>
                <select 
                  className="premium-input" 
                  style={{ appearance: 'none' }}
                  value={formData.schoolId}
                  onChange={e => setFormData({...formData, schoolId: e.target.value})}
                >
                  <option value="">Select School</option>
                  {SCHOOLS.map(s => <option key={s.id} value={s.id}>{s.name} (₹{s.fee}/mo)</option>)}
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '14px', marginBottom: '8px', display: 'block' }}>Joining Date</label>
                <input 
                  type="date" 
                  className="premium-input" 
                  value={formData.joiningDate}
                  onChange={e => setFormData({...formData, joiningDate: e.target.value})}
                />
              </div>

              {/* Parents Session */}
              <div style={{ gridColumn: 'window.innerWidth > 640 ? "span 2" : "span 1"', marginTop: '16px', marginBottom: '8px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: 'var(--primary)' }}>
                  <Bookmark size={18} /> Family Details
                </h3>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '14px', marginBottom: '8px', display: 'block' }}>Parent's Name</label>
                <input 
                  type="text" 
                  className="premium-input" 
                  placeholder="Father's or Mother's Name" 
                  value={formData.parentsName}
                  onChange={e => setFormData({...formData, parentsName: e.target.value})}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '14px', marginBottom: '8px', display: 'block' }}>Parent's Occupation</label>
                <input 
                  className="premium-input" 
                  placeholder="Occupation" 
                  value={formData.parentsOccupation}
                  onChange={e => setFormData({...formData, parentsOccupation: e.target.value})}
                />
              </div>

              {/* Addresses */}
              <div style={{ gridColumn: 'window.innerWidth > 640 ? "span 2" : "span 1"', marginTop: '16px', marginBottom: '8px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: 'var(--primary)' }}>
                  <MapPin size={18} /> Address Details
                </h3>
              </div>
              <div style={{ gridColumn: 'window.innerWidth > 640 ? "span 2" : "span 1"' }}>
                <label style={{ fontSize: '14px', marginBottom: '8px', display: 'block' }}>Residential Address</label>
                <textarea 
                  className="premium-input" 
                  style={{ minHeight: '80px', resize: 'vertical' }}
                  placeholder="Street, City, Pin"
                  value={formData.residentialAddress}
                  onChange={e => setFormData({...formData, residentialAddress: e.target.value})}
                />
              </div>
              <div style={{ gridColumn: 'window.innerWidth > 640 ? "span 2" : "span 1"' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '14px' }}>Permanent Address</label>
                  <label style={{ fontSize: '12px', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <input 
                      type="checkbox" 
                      style={{ opacity: 1, pointerEvents: 'auto' }}
                      checked={formData.sameAsResidential} 
                      onChange={() => {
                        const nextVal = !formData.sameAsResidential;
                        setFormData({
                          ...formData, 
                          sameAsResidential: nextVal,
                          permanentAddress: nextVal ? formData.residentialAddress : ''
                        });
                      }}
                    /> Same as Residential
                  </label>
                </div>
                <textarea 
                  className="premium-input" 
                  style={{ minHeight: '80px', resize: 'vertical' }}
                  placeholder="Permanent Address"
                  value={formData.sameAsResidential ? formData.residentialAddress : formData.permanentAddress}
                  onChange={e => !formData.sameAsResidential && setFormData({...formData, permanentAddress: e.target.value})}
                  disabled={formData.sameAsResidential}
                />
              </div>
            </div>

            <button className="premium-button" style={{ width: '100%', marginTop: '32px', justifyContent: 'center' }}>
              Complete Registration & Collect ₹500
            </button>
          </div>
        </div>

        {/* Sidebar for Summary & Fees */}
        <div style={{ width: '320px' }}>
          <div className="glass-card" style={{ padding: '24px', position: 'sticky', top: '40px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <CreditCard size={18} color="var(--accent)" /> Fee Summary
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Registration (One-time)</span>
                <span style={{ fontWeight: 600 }}>₹500</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Monthly Tuition</span>
                <span style={{ fontWeight: 600 }}>₹{selectedSchool ? selectedSchool.fee : '--'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Books (Required)</span>
                <span style={{ fontWeight: 600 }}>TBD</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Examination (Annually)</span>
                <span style={{ fontWeight: 600 }}>₹1000</span>
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '8px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 700 }}>
                <span>Registration Total</span>
                <span style={{ color: 'var(--accent)' }}>₹500</span>
              </div>
            </div>

            <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', fontSize: '13px' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Payment for first month and books will be collected via <b>Fees History</b> section after registration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
